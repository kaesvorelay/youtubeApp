import { ReactNode } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 30px;
  height: 40px;
  width: 400px;
  border: none;
  border-radius: 10px;
  &:hover {
    outline: 5px solid rgb(124, 209, 184);
  }
  &:focus {
    outline: 5px solid rgb(124, 209, 184);
  }
`;

const StyledLabel = styled.label`
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const PopUpInput = (props: {
  type: string;
  textLabel: string;
  placeholder: string;
}) => {
  return (
    <>
      <StyledLabel htmlFor={props.type + "ID"}>{props.textLabel}</StyledLabel>
      <StyledInput
        placeholder={props.placeholder}
        type={props.type}
        id={props.type + "ID"}
      />
    </>
  );
};

export default PopUpInput;
