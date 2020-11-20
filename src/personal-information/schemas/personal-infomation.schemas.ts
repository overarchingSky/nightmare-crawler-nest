import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PersonalInfomation extends Document{

    @Prop()
    accountId?: string;

    @Prop({ required: true })
    name: string;
    
    @Prop({ required: true })
    age:string

    @Prop()
    gender: 'MALE' | 'FEMAL';
}

export const PersonalInfomationSchema = SchemaFactory.createForClass(PersonalInfomation);