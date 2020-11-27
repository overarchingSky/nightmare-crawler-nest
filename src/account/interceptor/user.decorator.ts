import { IAccount, User, IUserMeta } from "../dto/account.dto"

/**
 * 返回策略：取users列表中的第一个作为当前user返回
 * @param target 类的方法
 * @param strategy 返回策略
 */
export function warpFun(target:Function,strategy:(users:IUserMeta[]) => User | undefined){
    return async function(...params): Promise<IAccount | IAccount[]> {
        params = params.filter(param => param !== undefined && param !== null && String(param).trim() !== '')
        let accounts: IAccount | IAccount[] = await target.call(this, ...params)
        if(Array.isArray(accounts)){
            accounts.forEach(account => {
                if(account.user && Array.isArray(account.user)){
                    account.user = strategy(account.user as IUserMeta[])
                }
            })
        }else{
            if(accounts.user && Array.isArray(accounts.user)){
                accounts.user = strategy(accounts.user as IUserMeta[])
            }            
        }
        return accounts
    }
}

/**
 * 统一处理account模块中，返回的user字段：[User] => User
 * @param params 
 */
export function User(strategy:(users:IUserMeta[]) => User | undefined) {
    if(!strategy) throw new Error('@User必须传入一个方法，作为处理策略')
    return function(target:any,key?:string){
        // 装饰器是否用在类上
        const isClass = !key///class\s.*/.test(target.toString())
        if(isClass){
            const [constructor, ...propertyOrFuns] = Object.getOwnPropertyNames(target.prototype)
            propertyOrFuns.forEach(propertyOrFun => {
                if(typeof target.prototype[propertyOrFun] === 'function'){
                    target.prototype[propertyOrFun] = warpFun(target.prototype[propertyOrFun],strategy)
                }
            })
        }else{
            // target是类的方法
            target[key] = warpFun(target[key],strategy)
        }
        return target
    }
}