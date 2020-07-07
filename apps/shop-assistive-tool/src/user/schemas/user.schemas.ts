import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document{
    @Prop()
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    password:string
}

export const UserSchema = SchemaFactory.createForClass(User);