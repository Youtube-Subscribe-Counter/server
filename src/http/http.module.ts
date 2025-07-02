import { Module } from '@nestjs/common';
import { HttpModule as NestHttpModule } from '@nestjs/axios';
import { HttpClient } from './http.client';

@Module({
  imports: [NestHttpModule],
  exports: [HttpClient],
  providers: [HttpClient],
})
export class HttpModule {}
