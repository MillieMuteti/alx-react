import './BodySection'
import React from 'react'
import { shallow } from 'enzyme'


describe("Body section tests", () =>{
    it("Renders correctly", () =>{
        const test = shallow (
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        )
    })
    expect(test.exists()).toBe(true);
    expect(test.exists("h2")).toBe(true);
    expect(test.find("h2").html()).toEqual("<h2>test title</h2>");
    expect(test.exists("p")).toBe(true);
    expect(test.find("p").text()).toEqual("test children node");
});
