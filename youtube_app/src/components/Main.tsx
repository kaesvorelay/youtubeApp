import React, { useState } from "react";
import styled from "styled-components";

import Container from "./Container";
import Input from "./Input";
import Title from "./Title";
import Button from "./Button";
import { useAppDispatch } from "../hooks/reduxHooks";
import { fetchChannel } from "../store/asyncAction/createAsyncAction";
import Slider from "./Slider";

const StyledMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const Main = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>("");
  const getValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const player =
    '\u003ciframe width="480" height="270" src="//www.youtube.com/embed/9szzQ0r_0FY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\u003e\u003c/iframe\u003e';

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
    <Container>
      <StyledMain>
        <Title>Find a video and download{"\u00A0"}it! Let's go!</Title>
        <Wrapper>
          <Input
            onKeyUp={getValueWitchKeyboard}
            onChange={getValueInput}
          ></Input>
          <Button onClick={getChanel}></Button>
        </Wrapper>
        <Slider></Slider>
      </StyledMain>
    </Container>
  );
};

export default Main;
