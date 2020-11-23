import { Document } from 'mongoose';
export declare class PersonalInfomation extends Document {
    accountId?: string;
    name: string;
    age: string;
    gender: 'MALE' | 'FEMAL';
}
export declare const PersonalInfomationSchema: any;
