import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure, mount } from "enzyme";
import { StyledWrapper } from "./StyledWrapper";
import Wrapper from "./Wrapper";

configure({ adapter: new Adapter() });

describe("Test Wrapper component", () => {
  it("Should render StyledWrapper in Wrapper", () => {
    const wrapper = shallow(
      <Wrapper>
        <div></div>
      </Wrapper>
    );
    const prop = wrapper.find(StyledWrapper);
    expect(prop.length).toBe(1);
  });
});
