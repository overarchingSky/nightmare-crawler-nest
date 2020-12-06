import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(): string {
    return '欢迎来到蜀都之恋!';
  }
}
