import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IPersonalInfomation } from '../dto/personalInfomation.dto';

@Schema()
export class PersonalInfomation extends Document implements IPersonalInfomation {
  @Prop()
  accountId?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  gender: 'MALE' | 'FEMAL';
}

export const PersonalInfomationSchema = SchemaFactory.createForClass(
  PersonalInfomation,
);
