import { Controller, Get } from '@nestjs/common';
import { ProductReleaseService } from './product-release.service';

@Controller('product-release')
export class ProductReleaseController {
    constructor(private readonly productReleaseService: ProductReleaseService){}

    @Get()
    getHellow():string{
        return this.productReleaseService.getHellow()
    }
}
