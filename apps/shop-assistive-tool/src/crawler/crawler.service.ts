import { Injectable } from '@nestjs/common';

@Injectable()
export class CrawlerService {
    getHello(): string {
        return 'crawler:Hello World!';
    }
}
