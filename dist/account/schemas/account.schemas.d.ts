import { Document } from 'mongoose';
export declare class Account extends Document {
    account: string;
    password: string;
    user: string[];
}
export declare const AccountSchema: import("mongoose").Schema<any>;
