import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background-color: transporent;
`;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
