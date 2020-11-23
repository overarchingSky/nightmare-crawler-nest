import { Reflector } from '@nestjs/core';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Account extends Document {
  @Prop({ required: true })
  account: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: [] })
  user: string[];
}
console.log('Account', Account);
export const AccountSchema = SchemaFactory.createForClass(Account);
