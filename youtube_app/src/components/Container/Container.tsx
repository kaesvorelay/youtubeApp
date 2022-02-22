import React from "react";
import { StyledContainer } from "./StyledContainer";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
