import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
    private readonly users: User[];
    constructor(){
        // 密码应该使用bcrypt库去进行加密
        this.users = [
            {
                id: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                id: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                id: 3,
                username: 'maria',
                password: 'guess',
            },
          ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
