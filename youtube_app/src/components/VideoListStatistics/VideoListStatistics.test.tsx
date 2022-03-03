import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { setupStore } from "../../store/store";
import VideoList from "./VideoListStatistics";

configure({ adapter: new Adapter() });

const store = setupStore();

describe("Test VideoLicsStatistics", () => {
  it("should render StyledHeader in default component", () => {
    const wrapper = mount(
      <Provider store={store}>
        <VideoList></VideoList>
      </Provider>
    );
    const prop = wrapper.find("h1");
    expect(prop.text()).toEqual("Waiting...");
  });
  it("should render children component", () => {});
});
