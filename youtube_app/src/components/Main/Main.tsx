import React, { useState } from "react";
import { Link } from "react-router-dom";

import { StyledMain } from "./StyledMain";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { fetchChannel } from "../../store/asyncAction/createAsyncAction";
import Slider from "../Slider/Slider";

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
