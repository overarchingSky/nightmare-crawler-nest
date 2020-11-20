import { AuthService } from './auth.service';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
export declare class AuthController {
    private readonly authService;
    private readonly personalInfomationService;
    constructor(authService: AuthService, personalInfomationService: PersonalInfomationService);
    login(req: any): Promise<{
        accessToken: string;
    }>;
    getProfile(req: any): Promise<any>;
}
