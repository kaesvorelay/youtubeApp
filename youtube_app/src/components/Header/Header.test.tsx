import { shallow, configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { setIsOpen } from "../../store/reducer/reducerPopUp";
import { setupStore } from "../../store/store";
import Header from "./Header";
import CustomIcon from "../CustomIcon/CustomIcon";

configure({ adapter: new Adapter() });

const mockStore = configureStore();
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
    const store = mockStore({});
    const foo = jest.fn(() => store.dispatch(setIsOpen()));

    const wrap = mount(
      <Provider store={store}>
        <Header>
          <CustomIcon onClick={foo}>div</CustomIcon>
        </Header>
      </Provider>
    );
    wrap.find(CustomIcon).first().simulate("click");
    const action = store.getActions();
    const expectedPayload = { type: "popup/setIsOpen", payload: undefined };
    expect(action).toEqual([expectedPayload]);
  });
});
