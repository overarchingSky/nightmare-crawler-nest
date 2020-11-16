import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Account extends Document{
    @Prop()
    id: string;

    @Prop({ required: true })
    account: string;

    @Prop({ required: true })
    password:string

    @Prop()
    name: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);