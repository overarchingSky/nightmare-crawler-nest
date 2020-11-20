import { Document } from 'mongoose';
export declare class Account extends Document {
    account: string;
    password: string;
}
export declare const AccountSchema: import("mongoose").Schema<any>;
