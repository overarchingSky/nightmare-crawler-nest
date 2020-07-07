import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document{
    @Prop()
    id: string;

    @Prop({ required: true })
    account: string;

    @Prop({ required: true })
    password:string

    @Prop()
    name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);