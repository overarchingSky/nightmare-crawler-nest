import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schemas';

interface UserDto {
    id:string
    name:string,
    password:string
}

@Injectable()
export class UserService {
    //private readonly users: UserSchema[];
    constructor(@InjectModel(User.name) private userModels: Model<User>){
        // 密码应该使用bcrypt库去进行加密
    }

    async create(createCatDto: UserDto): Promise<User> {
        console.log('CreateCatDto',createCatDto)
        const createdUser = new this.userModels(createCatDto);
        return createdUser.save();
    }
    
    async findAll(): Promise<User[]> {
        return this.userModels.find().exec();
    }

    async find(username: string): Promise<User | undefined> {
        const all = await this.findAll()
        return all.find(user => user.name === username);
    }
}
