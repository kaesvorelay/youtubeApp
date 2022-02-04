import React, { ReactNode } from "react";
import styled from "styled-components";

import Container from "./Container";
import CustomIcon from "./CustomIcon";

const StyledHeader = styled.header`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <StyledHeader>
        <CustomIcon>fromYouTube</CustomIcon>
        {children}
      </StyledHeader>
    </Container>
  );
};

export default Header;
