import { shallow, configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ContentWrapper from "./ConentWrapper";
import { StyledContentWrapper } from "./StyledContentWrapper";

configure({ adapter: new Adapter() });

describe("Test ContentWrapper", () => {
  it("Should render StyledContentWrapper in ContentWrapper", () => {
    const wrapper = mount(<ContentWrapper></ContentWrapper>);
    const prop = wrapper.find("div");
    expect(prop.length).toBe(1);
  });
});
