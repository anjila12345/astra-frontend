import React from 'react';
import { shallow } from 'enzyme';
import Mypost from '../component/Agent/mypost';
describe('Login component tests', () => {
    const wrapper = shallow(<Mypost />);
    test('should have a btn component and btn component should be named Save', () => {

        //There should be only one button
        expect(wrapper.find('button'));
        //Button should have matching text
        expect(wrapper.find('#update'));
    })
    test("render the h3", () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('h3').text()).toContain("My Posts");
    });
    it('should have input for email and password', () => {
        //Email and password input field should be present
        expect(wrapper.find('input#title'));
        expect(wrapper.find('textarea#descriptiond'));
        expect(wrapper.find('input#experience'));
        expect(wrapper.find('input#education'));
        expect(wrapper.find('input#salary'));
    });

    test('should have an empty fullname, address, number, email and password state var', () => {
        //Optionally test to check if password and email are empty strings on 
        expect(wrapper.state('title'));
        expect(wrapper.state('descriptiond'));
        expect(wrapper.state('experience'));
        expect(wrapper.state('education'));
        expect(wrapper.state('salary'));
    });

    test('should have a href component and href component should be named home', () => {

        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#applicants'));
    })


})