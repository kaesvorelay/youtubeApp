import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button/Button";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import Input from "../components/Input/Input";
import VideoList from "../components/VideoListStatistics/VideoListStatistics";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchChannel } from "../store/asyncAction/createAsyncAction";

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
      </Header>
      <Wrapper>
        <Input
          onChange={getValueInput}
          onKeyUp={getValueWitchKeyboard}
          placeholder="Enter channel"
        ></Input>

        <Button onClick={getChanel}></Button>
        <Link className="switch-page" to="/">
          View video from youtube
        </Link>
      </Wrapper>
      <VideoList />
    </>
  );
};

export default AnalyticsPage;
