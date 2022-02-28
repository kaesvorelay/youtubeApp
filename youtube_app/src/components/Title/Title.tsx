import React from "react";
import { StyledTitle } from "./StyledTitle";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
