import { shallow, configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import Input from "./Input";
import { StyledSearch } from "./StyledInpt";

configure({ adapter: new Adapter() });

describe("testing input component", () => {
  it("should render input component", () => {
    const wrapper = shallow(
      <Input onChange={() => jest.fn()} onKeyUp={() => jest.fn()} />
    );
    const component = wrapper.find(StyledSearch);
    expect(component.length).toBe(1);
  });
  it("should render input with palceholder", () => {
    const wrapper = shallow(
      <Input
        onChange={() => jest.fn()}
        onKeyUp={() => jest.fn()}
        placeholder="Hello world"
      />
    );
    const prop = wrapper.find(StyledSearch).at(0).props().placeholder;
    expect(prop).toEqual("Hello world");
  });
  it("should render input without palceholder", () => {
    const wrapper = mount(
      <Input onChange={() => jest.fn()} onKeyUp={() => jest.fn()} />
    );
    const prop = wrapper.find(StyledSearch).at(0).props().placeholder;
    expect(prop).toEqual(undefined);
  });
});
