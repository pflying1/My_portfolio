/* 
  기본 컨트롤러 파일을 작성합니다. 
  특정 라우트의 요청을 처리하고 응답을 반환.
  api 엔드포인트 작성 하는 곳
*/
import { Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app-service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  getHello(): string[] {
    return this.appService.getHello();
  } 
}