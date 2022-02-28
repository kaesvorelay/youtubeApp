import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure, mount } from "enzyme";
import { StyledTitle } from "./StyledTitle";
import Title from "./Title";

configure({ adapter: new Adapter() });

describe("Test Title component", () => {
  it("should render StyledTitle in Title component", () => {
    const wrapper = mount(
      <Title>
        <div></div>
      </Title>
    );
    const prop = wrapper.find("h1");
    expect(prop.length).toBe(1);
  });
});
