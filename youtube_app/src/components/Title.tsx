import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: rgb(250, 237, 198);
  align-self: center;
  font-size: 4rem;
`;

const Title = ({ children }: { children: React.ReactNode }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
