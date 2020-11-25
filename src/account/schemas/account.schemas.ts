import { Reflector } from '@nestjs/core';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IPersonalInfomation } from 'src/personal-information/dto/personalInfomation.dto';
import { IAccount } from '../dto/account.dto';

@Schema()
export class Account extends Document implements IAccount {
    @Prop({ required: true })
    account: string;

    @Prop({ required: true })
    password: string;
    /**
     * 微信用户在同一个微信开放平台下的唯一id，相当于用户的识别标志
     * 参见：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html
     */
    @Prop()
    unionId?: string;
    
    @Prop({ default: [] })
    user?: string[];//这里保存的是personalInfomation的id
}
console.log('Account', Account);
export const AccountSchema = SchemaFactory.createForClass(Account);
