import { StyledWrapper } from "./StyledWrapper";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
