import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '../http/http.client';
import { YoutubeChannelDto, YoutubeChannelSearchDto } from './dto/youtube.dto';

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

    return { channelId };
  }

  async getSubscribers(channelId: string) {
    try {
      const response = this.httpClient.get<YoutubeChannelDto>({
        url: `${this.baseUrl}/channels`,
        params: {
          part: 'statistics',
          id: channelId,
          key: this.apiKey,
        },
      });

      const { data } = await firstValueFrom(response);

      const channel = data.items.find(({ id }) => id === channelId);

      if (!channel) {
        return { subscribers: 0 };
      }

      return { subscribers: channel.statistics.subscriberCount };
    } catch {
      console.log('error');
    }
  }
}
