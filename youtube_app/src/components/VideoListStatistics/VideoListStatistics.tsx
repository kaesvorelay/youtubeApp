import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchAnalytics } from "../../store/asyncAction/analyticsAction";

import * as _ from "lodash";
import ChartBar from "../Charts/ChartBar";
import {
  StyledChartWrap,
  StyledColumn,
  StyledContentWrap,
  StyledFigure,
  StyledHeading,
} from "./StyledVideoListStatistics";

const VideoList = () => {
  const store = useAppSelector((state) => state.channelSlice);
  const storeAnalytics = useAppSelector((state) => state.analyticsSlice);
  const dispatch = useAppDispatch();

  const giveIdVideo = () => {
    let arrIdVideo: string | string[] = store.data.map((item) => item.idVideo);
    arrIdVideo = _.join(arrIdVideo, ",");
    dispatch(fetchAnalytics(arrIdVideo));
  };

  useEffect(() => {
    giveIdVideo();
  }, [store.data]);

  if (storeAnalytics.loading && storeAnalytics.data.length > 0) {
    return (
      <>
        <StyledColumn>
          {storeAnalytics.data.map((item) => (
            <StyledContentWrap>
              <StyledFigure>
                <img
                  alt="channel"
                  src={store.data[storeAnalytics.data.indexOf(item)].image}
                />
                <figcaption>
                  {store.data[storeAnalytics.data.indexOf(item)].descr}
                </figcaption>
              </StyledFigure>
              <StyledChartWrap>
                <ChartBar
                  items={[
                    item.viewCount,
                    item.likeCount,
                    item.favoriteCount,
                    item.commentCount,
                  ]}
                />
              </StyledChartWrap>
            </StyledContentWrap>
          ))}
        </StyledColumn>
      </>
    );
  } else {
    return <StyledHeading>Waiting...</StyledHeading>;
  }
};

export default VideoList;
