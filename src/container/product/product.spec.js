import React from "react";
import {Product } from "./";

describe("Product Component Testing With Mount",()=>{
	let action, product, data, shallowProduct;
	beforeEach(()=>{
		action = jest.fn(),
		data = [{
			isPublished: "true",
			productName: "Apple iPhone X",
			productImage:
              "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
			price: "299"
		}];
		product = mount(<Product  productList={data} />);
          
	});
	it("should require productList prop",()=>{
		expect(product.props().productList).toBeDefined();
	});
	it("should render Product with productList props",()=>{
		expect(product.prop("productList")).toEqual(data);
	});
    
});

describe("Product Component",()=>{
	let shallowProduct,data;
	beforeEach(()=>{
		data = [{
			isPublished: "true",
			productName: "Apple iPhone X",
			productImage:
              "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
			price: "299"
		}];
		shallowProduct = shallow(<Product productList={data} />);

	});
	it("should render button wrapper",()=>{
		expect(shallowProduct.find("Button")).toBeDefined();
	});
	it("should render Image wrapper",()=>{
		expect(shallowProduct.find("Image")).toBeDefined();
	});
	it("should render ProductName ",()=>{
		expect(shallowProduct.find(".product_name")).toBeDefined();
	});
	it("renders the Product Amount", () => {
		expect(shallowProduct.find(".product_amount")).toBeDefined();
	});

});