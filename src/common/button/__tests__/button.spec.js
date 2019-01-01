import React from "react";
import { shallow } from "enzyme";
import Button from "../index";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


const setup = props => {
  
	const actions = {
		action: jest.fn()
	};

	const component = shallow(<Button {...props} {...actions} />);

	return { component: component,
		addToCart: actions,
		button: component.find("button") };
};

let buttonProps;
describe("Button Component Shallow Testing",()=>{
	beforeEach(() => {
		buttonProps = {
			name:"Add To Cart",
			buttonType:"primary"
		};
	});
  
	it("should render button text", () => {
		const {button}= setup(buttonProps);
		expect(button.text()).toMatch(/^Add To Cart/);
	});
	it("should call handler on click of button", () => {
		const {button,addToCart}= setup(buttonProps);
		button.simulate("click");
		expect(addToCart.action).toBeCalled();
	});
});
