import { Document } from 'mongoose';
export declare class PersonalInfomation extends Document {
    id: string;
    userId: string;
    name: string;
    age: string;
    gender: 'MALE' | 'FEMAL';
}
export declare const PersonalInfomationSchema: import("mongoose").Schema<any>;
