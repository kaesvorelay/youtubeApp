import { ReactNode } from "react";
import styled from "styled-components";

const StyledSubmitBtn = styled.button`
  background: rgb(250, 187, 81);
  color: rgb(250, 237, 198);
  width: 180px;
  height: 120px;
  align-self: center;
  border: none;
  border-radius: 15px;
  font-size: 24px;
  &:hover {
    outline: 5px solid rgb(124, 209, 184);
  }
  &:focus {
    outline: 5px solid rgb(124, 209, 184);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const SubmitBtn = ({ children }: { children: ReactNode }) => {
  return <StyledSubmitBtn>{children}</StyledSubmitBtn>;
};

export default SubmitBtn;
