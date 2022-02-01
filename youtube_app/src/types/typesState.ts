import { rootReducer, setupStore } from "../store/store";

export interface IState {
  error: string;
  loading: boolean;
  data: IfetchChannel[];
}

export interface IfetchChannel {
  idVideo: string;
  channelTitle: string;
  descr: string;
}

export type Data = {
  id: {
    videoId: string;
  };
  snippet: {
    channelTitle: string;
    description: string;
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
