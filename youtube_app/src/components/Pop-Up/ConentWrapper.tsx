import { ReactNode } from "react";
import styled from "styled-components";

const StyledContentWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 600px;
  border: 8px solid rgb(124, 209, 184);
  border-radius: 20px;
  background-color: rgb(250, 237, 198);
  padding: auto;
  z-index: 100;
`;

const ContentWrapper = ({ children }: { children?: ReactNode }) => {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
};

export default ContentWrapper;
