import { Model } from 'mongoose';
import { PersonalInfomation } from './schemas/personal-infomation.schemas';
export declare class PersonalInfomationService {
    private PersonalInfomationModel;
    constructor(PersonalInfomationModel: Model<PersonalInfomation>);
    create(PersonalInfomationDto: PersonalInfomation): Promise<PersonalInfomation | undefined>;
    delete(ids: string[]): Promise<any>;
    deleteById(id: string): Promise<PersonalInfomation | undefined>;
    findById(id: string): Promise<PersonalInfomation | undefined>;
    findOne(userId: string): Promise<PersonalInfomation>;
    find(ids: string[]): Promise<PersonalInfomation[] | undefined>;
}
