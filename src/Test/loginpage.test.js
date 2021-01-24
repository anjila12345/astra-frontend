import React from 'react';
import { shallow } from 'enzyme';
import Loging from '../component/login2';
describe('Loging component tests', () => {
    const wrapper = shallow(<Loging />);

    test("render the h3", () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('h3').text()).toContain("Login to the system");

      });

      test('should have a href component and href component should be named home', () => {

        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#loginn').text()).toBe("Jobseeker");
      })

      test('should have a href component and href component should be named home', () => {

        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#agentloginn').text()).toBe("Employer");
      })
    

})