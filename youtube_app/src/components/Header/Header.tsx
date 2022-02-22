import React, { ReactNode } from "react";
import { StyledHeader } from "./StyledHeader";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setIsOpen } from "../../store/reducer/reducerPopUp";

import Container from "../Container/Container";
import CustomIcon from "../CustomIcon/CustomIcon";

const Header = ({ children }: { children?: ReactNode }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setIsOpen());
  };

  return (
    <Container>
      <StyledHeader>
        <CustomIcon onClick={handleClick}>Log In</CustomIcon>
        {children}
      </StyledHeader>
    </Container>
  );
};

export default Header;
