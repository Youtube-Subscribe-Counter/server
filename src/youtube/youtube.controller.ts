import { Controller, Get, Query } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get('/search')
  searchChannel(@Query('q') q: string) {
    return this.youtubeService.getChannelId(q);
  }

  @Get('/subscribers')
  getSubscribers(@Query('q') q: string) {
    return this.youtubeService.getSubscribers(q);
  }
}
