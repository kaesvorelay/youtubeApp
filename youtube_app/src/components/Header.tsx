import React from "react";
import styled from "styled-components";

import Container from "./Container";
import CustomIcon from "./CustomIcon";

const StyledHeader = styled.header`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <CustomIcon>fromYouTube</CustomIcon>
      </StyledHeader>
    </Container>
  );
};

export default Header;
