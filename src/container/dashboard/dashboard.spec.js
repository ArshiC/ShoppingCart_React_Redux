import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { Dashboard } from "./index";

describe("Dashboard Component", () => {
	it("renders the Product Wrapper", () => {
		const wrapper = shallow(<Dashboard />);
		expect(wrapper.find(".product_list")).to.have.length(1);
	});

	it("renders the cart Wrapper", () => {
		const wrapper = shallow(<Dashboard />);
		expect(wrapper.find(".cart_list")).to.have.length(1);
	});
});
