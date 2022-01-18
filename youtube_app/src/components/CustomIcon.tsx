import React from "react";
import styled from "styled-components";

const StyledCustomIcon = styled.div`
  text-align: center;
  padding: 10px;
  width: 250px;
  height: 50px;
  outline: none;
  color: rgb(250, 237, 198);
  background-color: #c4302b;
  border: none;
  border-radius: 22px;
  font-size: 1.7rem;
  letter-spacing: 0.15rem;
  font-weigth: bold;
  align-self: flex-end;
`;

const CustomIcon = ({ children }: { children: React.ReactNode }) => {
  return <StyledCustomIcon>{children}</StyledCustomIcon>;
};

export default CustomIcon;
