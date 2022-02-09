import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as _ from "lodash";

import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Title from "../components/Title";
import Input from "../components/Input";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchChannel } from "../store/asyncAction/createAsyncAction";
import { fetchAnalytics } from "../store/asyncAction/analyticsAction";

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

  if (storeAnalytics.data.length > 0 && storeAnalytics.loading) {
    return (
      <ul>
        {storeAnalytics.data.map((item) => (
          <li>
            <span>{item.commentCount}</span>
            <span>{item.favoriteCount}</span>
            <span>{item.likeCount}</span>
            <span>{item.viewCount}</span>
          </li>
        ))}
      </ul>
    );
  } else {
    return <h1>????</h1>;
  }
};

const AnalyticsPage = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>("");

  const getValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const getValueWitchKeyboard = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      getChanel();
    }
  };

  const getChanel = () => {
    dispatch(fetchChannel(input));
  };

  return (
    <>
      <Header>
        <Title>Video analytics based on your search results.</Title>
        <Link to="/">Back</Link>
      </Header>
      <Wrapper>
        <Input
          onChange={getValueInput}
          onKeyUp={getValueWitchKeyboard}
          placeholder="Enter channel"
        ></Input>
        <Button onClick={getChanel}></Button>
      </Wrapper>
      <VideoList></VideoList>
    </>
  );
};

export default AnalyticsPage;
