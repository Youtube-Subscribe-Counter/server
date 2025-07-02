import { Module } from '@nestjs/common';
import { HttpModule } from '../http/http.module';
import { YoutubeService } from './youtube.service';
import { YoutubeController } from './youtube.controller';
import { YoutubeClient } from './youtube.client';

@Module({
  controllers: [YoutubeController],
  providers: [YoutubeService, YoutubeClient],
  imports: [HttpModule],
})
export class YoutubeModule {}
