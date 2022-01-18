import React from "react";
import styled from "styled-components";

const StyledSearch = styled.input`
  border: none;
  outline: none;
  border-radius: 5px 0 0 5px;
  background: rgb(250, 237, 198);
  margin-top: 30px;
  padding: 10px;
  width: 40vw;
  height: 50px;
  align-self: center;
  &:hover {
    outline: 5px solid rgb(124, 209, 184);
  }
  &:focus {
    outline: 5px solid rgb(124, 209, 184);
  }
`;

const Input = (props: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <StyledSearch
      onChange={props.onChange}
      placeholder="Enter need chanel"
      type="text"
    ></StyledSearch>
  );
};

export default Input;