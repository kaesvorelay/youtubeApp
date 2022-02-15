import React, { ReactNode } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { open } from "../store/reducer/reducerPopUp";

import Container from "./Container";
import CustomIcon from "./CustomIcon";

const StyledHeader = styled.header`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Header = ({ children }: { children: ReactNode }) => {
  const store = useAppSelector((state) => state.popUpSlice);
  const dispatch = useAppDispatch();

  const clickable = () => {
    dispatch(open());
    console.log(store.isOpen);
  };

  return (
    <Container>
      <StyledHeader>
        <CustomIcon onClick={clickable}>fromYouTube</CustomIcon>
        {children}
      </StyledHeader>
    </Container>
  );
};

export default Header;
