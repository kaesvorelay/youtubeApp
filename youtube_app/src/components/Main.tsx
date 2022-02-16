import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

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
            placeholder="enter video name"
          ></Input>
          <Button onClick={getChanel}></Button>
          <Link className="switch-page" to="/analytics">
            View statistics or video
          </Link>
        </Wrapper>
        <Slider />
      </StyledMain>
    </Container>
  );
};

export default Main;
