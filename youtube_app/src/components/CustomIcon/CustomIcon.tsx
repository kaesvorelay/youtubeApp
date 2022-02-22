import React from "react";
import { StyledCustomIcon } from "./StyledCustomIcon";

const CustomIcon = (props: {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
}) => {
  return (
    <StyledCustomIcon onClick={props.onClick}>
      {props.children}
    </StyledCustomIcon>
  );
};

export default CustomIcon;
