import React from "react";
import { shallow, mount, render } from "enzyme";
import { Cart } from "./index";
import { expect } from "chai";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const setup = props => {
  const actions = {
    action: jest.fn()
  };

  const component = shallow(<Cart {...props} />);

  return {
    component: component,
    addFromCart: actions,
    button: component.find("button")
  };
};

let cartProps, actions;
describe("Cart Component", () => {
  beforeEach(() => {
    cartProps = {
      cartList: [
        {
          isPublished: "true",
          productName: "Apple iPhone X",
          productImage:
            "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
          price: "299"
        }
      ]
    };
    actions = { action: jest.fn() };
  });
  it("renders the Button Wrapper", () => {
    const { component } = setup(cartProps);
    expect(component.find("Button")).to.have.lengthOf(1);
  });

  it("renders the li Wrapper", () => {
    const { component, button } = setup(cartProps);
    expect(component.find("li")).to.have.lengthOf(1);
  });

  it("renders the cart  item text ", () => {
    const { component, button } = setup(cartProps);
    expect(component.find("span").text()).to.equal("Apple iPhone X");
  });

  it("renders the message when no data is provided ", () => {
    const { component, button } = setup([]);
    expect(component.find(".cart_container div").text()).to.equal(
      "No items added to cart"
    );
  });
});
