import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ChartBar from "./ChartBar";

configure({ adapter: new Adapter() });

describe("Test Chart component", () => {
  it("should render StyledButton", () => {
    const arr = ["a", "b"];

    const component = shallow(<ChartBar items={arr} />);
    const wrap = component.find("ForwardRef");
    expect(wrap.length).toBe(1);
  });
  it("Should render Chart components", () => {
    const arr = ["a", "b"];
    const component = shallow(<ChartBar items={arr} />);
    const wrap = component.find("ForwardRef");
    expect(wrap).toHaveLength(1);
  });
});
