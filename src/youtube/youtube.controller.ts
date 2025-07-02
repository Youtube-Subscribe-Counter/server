import { Controller, Get, Param, Query } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get('/search')
  searchChannel(@Query('q') q: string) {
    return this.youtubeService.getChannelId(q);
  }

  @Get(':channel/subscribers')
  findSubscribers(@Param('channel') channel: string) {
    return this.youtubeService.findSubscribers(channel);
  }
}
