import { User, IUserMeta } from "./dto/account.dto";

/**
 * 返回当前账户user列表中的第一项
 * @param users 当前账户的user列表
 */
export function FirstUser(users:IUserMeta[]): User| undefined{
    return users[0].ref as User
}