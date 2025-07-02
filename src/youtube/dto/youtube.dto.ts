export class YoutubeChannelResponseDto {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<{
    kind: string;
    etag: string;
    id: string;
    statistics: {
      viewCount: string;
      subscriberCount: string;
      hiddenSubscriberCount: string | boolean;
      videoCount: string;
    };
  }>;
}
