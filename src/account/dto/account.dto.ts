import { IPersonalInfomation } from "src/personal-information/dto/personalInfomation.dto";

export interface User extends IPersonalInfomation {}

export interface IUserMeta {
    project:string
    ref?:string | User
}

export interface IAccount {
    account:string,
    password:string,
    unionId?:string,
    // 关联到user.decorator.ts
    user?:User | IUserMeta[]
}
