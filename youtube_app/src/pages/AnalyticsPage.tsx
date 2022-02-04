import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Title from "../components/Title";
import Input from "../components/Input";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchChannel } from "../store/asyncAction/createAsyncAction";
import { statisticsData } from "../types/typesState";

const VideoList = () => {
  const store = useAppSelector((state) => state.channelSlice.data);
  const storeAnalytics = useAppSelector((state) => state.analyticsSlice.data);
  if (store.length > 0) {
    return (
      <ul>
        {/* Ичпользовать один стейт для создания другого стейта, на основании резултата вывести аналитику */}
        {storeAnalytics.map((item) => (
          <li>
            <span>{item.statistics.commentCount}</span>
            <span>{item.statistics.favoriteCount}</span>
            <span>{item.statistics.likeCount}</span>
            <span>{item.statistics.viewCount}</span>
          </li>
        ))}
      </ul>
    );
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

  const getChanel = async () => {
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
    </>
  );
};

export default AnalyticsPage;
