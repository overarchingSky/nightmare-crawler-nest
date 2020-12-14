import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './interceptor/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import {NestExpressApplication} from '@nestjs/platform-express'

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.useStaticAssets('public');
  await app.listen(3000);
}
bootstrap();
