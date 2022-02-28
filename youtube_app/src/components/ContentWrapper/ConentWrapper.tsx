import { ReactNode } from "react";
import { StyledContentWrapper } from "./StyledContentWrapper";

const ContentWrapper = ({ children }: { children?: ReactNode }) => {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
};

export default ContentWrapper;
