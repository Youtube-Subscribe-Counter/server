import { Injectable } from '@nestjs/common';
// import { YoutubeChannelResponseDto } from './dto/youtube.dto';

@Injectable()
export class YoutubeService {
  findSubscribers(channel: string) {
    // return new YoutubeChannelResponseDto();
    return { channel };
  }
}
