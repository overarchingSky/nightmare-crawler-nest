import { PersonalInfomationService } from './personal-infomation.service';
import { PersonalInfomation } from './schemas/personal-infomation.schemas';
export declare class PersonalInfomationController {
    private readonly personalInfomationService;
    constructor(personalInfomationService: PersonalInfomationService);
    find(ids: string[]): Promise<PersonalInfomation[] | undefined>;
    findById(id: string): Promise<PersonalInfomation | undefined>;
    create(personalInfomationDto: PersonalInfomation): Promise<PersonalInfomation>;
    delete(id: string): Promise<PersonalInfomation>;
    deletes(ids: string[]): Promise<any>;
}
