import React from "react";
import { shallow } from "enzyme";
import Image from "./index";
import renderer from "react-test-renderer";


const setup = props => {
	const component = shallow(<Image {...props} />);
	return { component: component };
};

let imageProps;
describe("Image Component", () => {
	beforeEach(() => {
		imageProps = {
			src:
        "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
			alt: "image name"
		};
	});
	it("should render image without crashing", () => {
		const { component } = setup(imageProps);
		expect(component.props()).toEqual({
			src:
        "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
			alt: "image name"
		});
	});

  
});

describe("Image Component snapshot testing", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(
				<Image
					alt="image name"
					src="https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png"
				/>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
