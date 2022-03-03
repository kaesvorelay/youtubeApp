import ReactDOM, { createPortal } from "react-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TestRenderer from "react-test-renderer";

import Modal from "./PopUpContainer";
import { setupStore } from "../../../store/store";
import PopUpInput from "../PopUpInput";

configure({ adapter: new Adapter() });

const store = setupStore();

describe("test portal", () => {
  const Child = () => <div></div>;
  // let component = TestRenderer.create(
  //   <Provider store={store}>
  //     <Modal></Modal>
  //   </Provider>
  // );
  const modalPopUp = global.document.createElement("div");
  modalPopUp.setAttribute("id", "pop-up");
  const body = global.document.querySelector("body");
  body?.appendChild(modalPopUp);

  it("should render portal", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Modal></Modal>
      </Provider>
    );
    const prop = wrapper.find(PopUpInput);

    expect(prop.exists()).toBeTruthy();
  });
});
