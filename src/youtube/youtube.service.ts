import { Injectable } from '@nestjs/common';
import { YoutubeClient } from './youtube.client';
// import { YoutubeChannelResponseDto } from './dto/youtube.dto';

@Injectable()
export class YoutubeService {
  constructor(private readonly youtubeClient: YoutubeClient) {}

  getChannelId(q: string) {
    return this.youtubeClient.getChannelId(q);
  }

  async getSubscribers(q: string) {
    const { channelId } = await this.getChannelId(q);
    return await this.youtubeClient.getSubscribers(channelId);
  }
}
