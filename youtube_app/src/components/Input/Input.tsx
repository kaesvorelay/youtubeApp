import React, { useEffect, useRef } from "react";
import { StyledSearch } from "./StyledInpt";

const Input = (props: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputFocus.current?.focus();
  });

  return (
    <StyledSearch
      ref={inputFocus}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
      type="text"
      placeholder={props.placeholder}
    ></StyledSearch>
  );
};

export default Input;
