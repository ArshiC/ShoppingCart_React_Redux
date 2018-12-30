import React from "react";
import Button from "../";

describe("Button Component Testing with Mount",()=>{
    let action ,button;
    beforeEach(()=>{
        action = jest.fn(),
        button = mount(<Button action={action} name="Add" />)
    })
    it("should require name prop",()=>{
        expect(button.props().action).toBeDefined();
    });
    it("should render button",()=>{
        expect(button.find("button").first()).toBeDefined();
    })
    it("should call action on button click",()=>{
        button.find("button").first().simulate("click")
        expect(action).toBeCalled();
    })
})