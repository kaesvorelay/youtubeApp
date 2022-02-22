import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";

import { setupStore } from "../../store/store";
import Header from "./Header";
import Container from "../Container/Container";
import { StyledHeader } from "./StyledHeader";

configure({ adapter: new Adapter() });

const store = setupStore();

describe("Test Header component", () => {
  it("should render Container in Header component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Header>
          <div>Header</div>
        </Header>
      </Provider>
    );
    const el = wrapper.find("div");
    expect(el.length).toBe(1);
  });
  // it("should render StyledHeader in Header component", () => {
  //   const wrapper = shallow(
  //     <Provider store={store}>
  //       <Header>
  //         <div>Header</div>
  //       </Header>
  //     </Provider>
  //   );
  //   const el = wrapper.find(StyledHeader);
  //   expect(el.length).toBe(1);
  // });
});
