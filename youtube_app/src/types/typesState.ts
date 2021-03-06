import { rootReducer, setupStore } from "../store/store";

export interface IState {
  error: string;
  loading: boolean;
  data: IfetchChannel[];
}

export interface IStateAnalytics {
  error: string;
  loading: boolean;
  data: IfetchAnalytics[];
}

export interface IfetchChannel {
  idVideo: string;
  channelTitle: string;
  descr: string;
  image: string;
}

export interface IfetchAnalytics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
  index?: number;
}

export interface IPropsChart {
  items: string[];
}

export type Data = {
  id: {
    videoId: string;
  };
  snippet: {
    channelTitle: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
};

export type statisticsData = {
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
};

export type RootState = ReturnType<typeof rootReducer>;
export type ApplicationStore = ReturnType<typeof setupStore>;
export type ApplicationDispatch = ApplicationStore["dispatch"];
