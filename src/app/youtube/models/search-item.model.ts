interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface IItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
    thumbnails: {
      default: IThumbnail;
      medium: IThumbnail;
      high: IThumbnail;
      standard?: IThumbnail;
      maxres?: IThumbnail;
    };

    tags?: string[];
    categoryId?: string;

    localized?: {
      title?: string;
      description?: string;
    };
    defaultAudioLanguage?: string;
    defaultLanguage?: string;
  };
}
