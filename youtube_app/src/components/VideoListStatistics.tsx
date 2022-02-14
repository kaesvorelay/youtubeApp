import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchAnalytics } from "../store/asyncAction/analyticsAction";

import * as _ from "lodash";
import Wrapper from "./Wrapper";
import ChartBar from "./Charts/ChartBar";
import styled from "styled-components";
import Container from "./Container";

const StyledChartWrapp = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledFigure = styled.figure`
  width: 40%;
  margin-right: 20px;
`;

const StyledContentWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledColumn = styled.div`
  flex-direction: column;
  margin-top: 20px;
  padding: 0 20px;
`;

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
                  src={store.data[storeAnalytics.data.indexOf(item)].image}
                  alt="picture"
                />
                <figcaption>
                  {store.data[storeAnalytics.data.indexOf(item)].descr}
                </figcaption>
              </StyledFigure>
              <StyledChartWrapp>
                <ChartBar
                  items={[
                    item.viewCount,
                    item.likeCount,
                    item.favoriteCount,
                    item.commentCount,
                  ]}
                />
              </StyledChartWrapp>
            </StyledContentWrap>
          ))}
        </StyledColumn>
      </>
    );
  } else {
    return <h1>????</h1>;
  }
};

export default VideoList;
