import styled from "styled-components";

export const StyledButton = styled.button`
  background: rgb(250, 187, 81);
  color: rgb(250, 237, 198);
  width: 80px;
  height: 50px;
  align-self: flex-end;
  border: none;
  border-radius: 0 5px 5px 0;
  &:hover {
    outline: 5px solid rgb(124, 209, 184);
  }
  &:focus {
    outline: 5px solid rgb(124, 209, 184);
  }
`;
