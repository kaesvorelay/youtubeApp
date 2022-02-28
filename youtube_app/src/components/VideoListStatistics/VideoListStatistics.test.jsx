import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure, mount } from "enzyme";
import { Provider } from "react-redux";
import { fetchAnalytics } from "../../store/asyncAction/analyticsAction";
import { setupStore } from "../../store/store";
import { StyledHeader } from "../Header/StyledHeader";
import VideoList from "./VideoListStatistics";

configure({ adapter: new Adapter() });

const store = setupStore();

describe("Test VideoLicsStatistics", () => {
  it("should render StyledHeader in component", () => {
    const wrapper = mount(
      <Provider store={store}>
        <VideoList></VideoList>
      </Provider>
    );
    const prop = wrapper.find("h1");
    expect(prop.text()).toEqual("Waiting...");
  });
});

describe("test render content", () => {
  beforeEach(() => {
    store.dispatch(fetchAnalytics("123"));
  });
  it("should render content if storeanalitics = true", () => {
    const storeAnalitics = {
      loading: true,
      error: false,
      data: [
        {
          viewCount: "string",
          likeCount: "string",
          favoriteCount: "string",
          commentCount: "string",
        },
      ],
    };

    store.dispatch(fetchAnalytics("123"));

    console.log(store.getState().analyticsSlice);

    const wrapper = mount(
      <Provider store={store}>
        <VideoList></VideoList>
      </Provider>
    );
  });
});
