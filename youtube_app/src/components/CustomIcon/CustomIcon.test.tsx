import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import reducerPopUp from "../../store/reducer/reducerPopUp";

import CustomIcon from "./CustomIcon";
import { StyledCustomIcon } from "./StyledCustomIcon";
import reducer, { setIsOpen } from "../../store/reducer/reducerPopUp";

configure({ adapter: new Adapter() });

describe("Test CustomIcon component", () => {
  it("should render StyledCustomIcon", () => {
    const children = <div></div>;
    const foo = jest.fn();
    const component = shallow(
      <CustomIcon onClick={foo}>{children}</CustomIcon>
    );
    const wrap = component.find(StyledCustomIcon);
    expect(wrap.length).toBe(1);
  });
  it("should have props in StyledCustomIcon", () => {
    const children = <div></div>;
    const foo = jest.fn();
    const component = shallow(
      <CustomIcon onClick={foo}>{children}</CustomIcon>
    );
    const wrap = component.find(StyledCustomIcon);
    expect(wrap).toHaveLength(1);
  });
});
