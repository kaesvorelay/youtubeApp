import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Container from "./Container";
import { StyledContainer } from "./StyledContainer";

configure({ adapter: new Adapter() });

describe("Test Container component", () => {
  it("should render StyledContainer", () => {
    const children = <div></div>;
    const component = shallow(<Container>{children}</Container>);
    const wrap = component.find(StyledContainer);
    expect(wrap.length).toBe(1);
  });
  it("should props in StyledContainer", () => {
    const children = <div></div>;
    const component = shallow(<Container>{children}</Container>);
    const wrap = component.find(StyledContainer);
    expect(wrap).toHaveLength(1);
  });
});
