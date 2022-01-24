import { rootReducer, setupStore } from "../store/store";

export interface IState {
  error: string;
  loading: boolean;
  data: Data[];
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

export type RootState = ReturnType<typeof rootReducer>;
export type ApplicationStore = ReturnType<typeof setupStore>;
export type ApplicationDispatch = ApplicationStore["dispatch"];
