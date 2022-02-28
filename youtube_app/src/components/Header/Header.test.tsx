import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";

import { setupStore } from "../../store/store";
import Header from "./Header";
import CustomIcon from "../CustomIcon/CustomIcon";
import { useAppDispatch } from "../../hooks/reduxHooks";

configure({ adapter: new Adapter() });

const store = setupStore();

describe("Test Header component", () => {
  it("should render Container in Header component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Header>
          <div></div>
        </Header>
      </Provider>
    );
    const el = wrapper.find("div");
    expect(el.length).toBe(1);
  });
  it("should click or CustomIcon", () => {
    const foo = jest.fn();
    const wrap = shallow(
      <Provider store={store}>
        <Header>
          <CustomIcon onClick={foo}>div</CustomIcon>
        </Header>
      </Provider>
    );
    wrap.find(CustomIcon).simulate("click");
    expect(foo.mock.calls.length).toBe(1);
  });
});
