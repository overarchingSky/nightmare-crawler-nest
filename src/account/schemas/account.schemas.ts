import { Reflector } from '@nestjs/core';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IAccount, User } from '../dto/account.dto';

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
    user?: User | (string | User)[]//这里数据库存的是User的id集合，如['dksjeg215132d1a35s1321']，因此default为[]，但在取数据时，希望将其转化成单个User，转化逻辑在user.decorator.ts中声明
}
console.log('Account', Account);
export const AccountSchema = SchemaFactory.createForClass(Account);
