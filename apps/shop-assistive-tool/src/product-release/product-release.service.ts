import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductReleaseService {
    getHellow(): string{
        return 'product-release:Hellow World!';
    }
}
