import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface Response<T> {
  data: T;
}
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<T> {
    return next.handle().pipe(
      map((data) => {
          let res = data
          if(typeof data === 'string'){
              //@ts-ignore
            res = { data }
          }
        return {
          ...res,
          code: 0,
          message: '请求成功',
        };
      }),
    );
  }
}
