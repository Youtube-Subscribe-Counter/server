import { Injectable } from '@nestjs/common';
import { YoutubeClient } from './youtube.client';
// import { YoutubeChannelResponseDto } from './dto/youtube.dto';

@Injectable()
export class YoutubeService {
  constructor(private readonly youtubeClient: YoutubeClient) {}

  async getChannelId(q: string) {
    const channelId = await this.youtubeClient.getChannelId(q);
    return { channelId };
  }

  findSubscribers(channel: string) {
    // return new YoutubeChannelResponseDto();
    // return { channel };

    return this.youtubeClient.findSubscribers(channel);
  }
}
