import { ReactNode } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
`;

const PopUpForm = ({ children }: { children: ReactNode }) => {
  return <StyledForm action="#">{children}</StyledForm>;
};

export default PopUpForm;
