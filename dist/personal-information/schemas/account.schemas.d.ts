import { Document } from 'mongoose';
export declare class Account extends Document {
    id: string;
    account: string;
    password: string;
    name: string;
}
export declare const AccountSchema: import("mongoose").Schema<any>;
