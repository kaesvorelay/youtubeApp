import React from "react";
import { StyledButton } from "./ButtonStyled";

const Button = (props: {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return <StyledButton onClick={props.onClick}>GO!</StyledButton>;
};

export default Button;
