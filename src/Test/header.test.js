import React from 'react';
import { shallow } from 'enzyme';
import Aheader from '../component/header';
describe('Aheader component tests', () => {
    const wrapper = shallow(<Aheader />);

    test('should have a href component and href component should be named login', () => {

        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#login').text()).toBe("Login");
    })

    test('should have a href component and href component should be named signup', () => {

        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#signup').text()).toBe("Signup");
    })
    test("render the click event Updateprofile", () => {
        wrapper.find('#signup').simulate("click");
    });
    test("render the click event Updateprofile", () => {
        wrapper.find('#login').simulate("click");
    });

})