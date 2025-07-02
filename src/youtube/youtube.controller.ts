import { Controller, Get, Param } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get(':channel/subscribers')
  findSubscribers(@Param('channel') channel: string) {
    return this.youtubeService.findSubscribers(channel);
  }
}
