import { StyledButton } from "./ButtonStyled";
import Button from "./Button";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Test Button component", () => {
  it("should render StyledButton", () => {
    const foo = jest.fn();
    const component = shallow(<Button onClick={foo} />);
    const wrap = component.find(StyledButton);
    expect(wrap.length).toBe(1);
  });
  it("should have props in StyledButton", () => {
    const foo = jest.fn();
    const component = shallow(<Button onClick={foo} />);
    const wrap = component.find(StyledButton);
    expect(wrap).toHaveLength(1);
  });
});
