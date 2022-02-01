import React, { useState } from "react";
import styled from "styled-components";

import Container from "./Container";
import Input from "./Input";
import Title from "./Title";
import Button from "./Button";
import { useAppDispatch } from "../hooks/reduxHooks";
import { fetchChannel } from "../store/asyncAction/createAsyncAction";
import Slider from "./Slider";
import { statisticsVideo } from "../api/api";

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
    <Container>
      <StyledMain>
        <Title>Find a video! Let's go!</Title>
        <Wrapper>
          <Input
            onKeyUp={getValueWitchKeyboard}
            onChange={getValueInput}
          ></Input>
          <Button onClick={getChanel}></Button>
        </Wrapper>
        <Slider />
      </StyledMain>
    </Container>
  );
};

export default Main;
