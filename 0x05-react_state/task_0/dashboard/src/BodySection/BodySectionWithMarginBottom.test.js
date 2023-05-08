import React from 'react'
import { shallow } from 'enzyme'
import '.BodySection.js'
import '.BodySectionWithMarginBottom.js'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'

describe("Body section components", ()=> {
    it("Apply css correctly to the component", () => {
        const test = shallow(<BodySectionWithMarginBottom title="test title" />)

        expect(test.find(BodySection)).toHaveLength(1);
        expect(test.find(BodySection).html()).toEqual('<div class="bodySection"><h2>test title</h2></div>')
    })
})