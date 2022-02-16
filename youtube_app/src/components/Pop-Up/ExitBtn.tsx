import { ReactNode } from "react";
import styled from "styled-components";

const StyledExitBtn = styled.button`
  width: 100px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #c4302b;
  position: absolute;
  color: rgb(250, 237, 198);
  font-size: 24px;
  top: 280px;
  right: 700px;
  z-index: 200;
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const ExitBtn = (props: {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <StyledExitBtn onClick={props.onClick}>{props.children}</StyledExitBtn>
  );
};

export default ExitBtn;
