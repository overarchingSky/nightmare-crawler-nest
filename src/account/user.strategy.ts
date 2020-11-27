import { User } from "./dto/account.dto";

/**
 * 返回当前账户user列表中的第一项
 * @param users 当前账户的user列表
 */
export function FirstUser(users:User[]): User| undefined | User[]{
    return users[0]
}