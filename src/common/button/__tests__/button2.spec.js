import React from "react";
import Button from "../index";
import renderer from "react-test-renderer";

describe("Button Component Snapshot Testing",()=>{
    test("it should render Button",()=>{
        const component = renderer.create(<Button src="https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung-galaxy-s9/samsung-galaxy-s9-purple-front.png"
        alt="Product Name" name="Product Name" />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    test("it should render Button with Button-Type",()=>{
        const component = renderer.create(<Button src="https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung-galaxy-s9/samsung-galaxy-s9-purple-front.png"
        alt="Product Name" name="Product Name" buttonType="danger" />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})
