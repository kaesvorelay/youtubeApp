import styled from "styled-components";

export const StyledSearch = styled.input`
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
