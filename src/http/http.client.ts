import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class HttpClient {
  constructor(private readonly httpService: HttpService) {}

  get<T>(config: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    const { url = '' } = config;
    return this.httpService.get<T>(url, config);
  }
}
