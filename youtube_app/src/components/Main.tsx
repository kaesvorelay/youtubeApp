import React, { ReactElement, useState } from "react";
import styled from "styled-components";

import Container from "./Container";
import Input from "./Input";
import Title from "./Title";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getValue } from "../store/actions/actionGetChanelList";
import { getChannel } from "../api/api";

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

const Wrapper = ({ children }: { children: React.ReactNode }): ReactElement => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const Main = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>("");
  const getValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Container>
      <StyledMain>
        <Title>Find a video and download{"\u00A0"}it! Let's go!</Title>
        <Wrapper>
          <Input onChange={getValueInput}></Input>
          <Button onClick={() => getChannel("maxgraph")}></Button>
        </Wrapper>
      </StyledMain>
    </Container>
  );
};

export default Main;
