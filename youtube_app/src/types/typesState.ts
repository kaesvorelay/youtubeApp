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
