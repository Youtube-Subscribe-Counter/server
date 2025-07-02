import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '../http/http.client';
import { YoutubeChannelSearchDto } from './dto/youtube.dto';

@Injectable()
export class YoutubeClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = configService.get<string>('YOUTUBE_API_KEY') || '';
    this.baseUrl = configService.get<string>('YOUTUBE_API_BASE') || '';
  }

  async getChannelId(q: string) {
    const response = this.httpClient.get<YoutubeChannelSearchDto>({
      url: `${this.baseUrl}/search`,
      params: {
        q,
        part: 'snippet',
        type: 'channel',
        key: this.apiKey,
      },
    });

    const { data } = await firstValueFrom(response);

    const [channelId] = data.items
      .map(({ snippet }) => snippet)
      .filter(({ title }) => {
        return title.includes(q);
      })
      .map(({ channelId }) => channelId);

    return channelId;
  }

  async findSubscribers(channel: string) {
    // return new YoutubeChannelResponseDto();
    const response = this.httpClient.get<any>({
      url: `${this.baseUrl}/youtube`,
    });

    const { data } = await firstValueFrom<any>(response);

    return data;
  }
}
