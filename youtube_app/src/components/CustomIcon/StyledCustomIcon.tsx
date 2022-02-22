import styled from "styled-components";

export const StyledCustomIcon = styled.button`
  text-align: center;
  padding: 10px;
  width: 250px;
  height: 50px;
  outline: none;
  color: rgb(250, 237, 198);
  background-color: #c4302b;
  border: none;
  border-radius: 22px;
  font-size: 1.7rem;
  letter-spacing: 0.15rem;
  font-weigth: bold;
  align-self: flex-end;
  cursor: pointer;
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
