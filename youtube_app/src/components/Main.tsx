import React, { useState } from "react";
import styled from "styled-components";

import Container from "./Container";
import Input from "./Input";
import Title from "./Title";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { searchChannel } from "../api/api";
import { channelSlice } from "../store/reducer/reducer";
import { fetchChannel } from "../store/asyncAction/createAsyncAction";

const StyledMain = styled.main`
  height: 30vh;
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
  const { addVal } = channelSlice.actions;
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
    // searchChannel(input).then((data) => console.log(data));
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
      </StyledMain>
    </Container>
  );
};

export default Main;
