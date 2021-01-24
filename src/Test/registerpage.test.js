import React from 'react';
import { shallow } from 'enzyme';
import Registers from '../component/register2';
describe('Registers component tests', () => {
    const wrapper = shallow(<Registers />);

    test("render the h3", () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('h3').text()).toContain("Create an Account");

      });

      test('should have a href component and href component should be named home', () => {

        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#jobseeker').text()).toBe("Jobseeker");
      })

      test('should have a href component and href component should be named home', () => {

        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#employer').text()).toBe("Employer");
      })
    

})