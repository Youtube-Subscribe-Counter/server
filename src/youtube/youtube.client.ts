import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, Observable } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpClient } from '../http/http.client';

@Injectable()
export class YoutubeClient {
  constructor(private readonly httpClient: HttpClient) {}

  async findSubscribers(channel: string) {
    // return new YoutubeChannelResponseDto();
    const response = this.httpClient.get<any>({
      url: 'https://api.github.com/users/hadley/orgs',
    });

    const { data } = await firstValueFrom<any>(response);

    return data;
  }
}
