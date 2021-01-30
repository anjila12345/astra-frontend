import React from 'react';
import { shallow } from 'enzyme';
import Admindas from '../component/Admin/adminDashboard';
describe('Admindas component tests', () => {
    const wrapper = shallow(<Admindas />);

    test("render the h3", () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('h3').text()).toContain("Dashboard");

      });
  
    test('should have a href component and href component should be named home', () => {
  
      //There should be only one button
      expect(wrapper.find('href'));
      //Button should have matching text
      expect(wrapper.find('#adminprofile').text()).toBe("Admin Profile");
    })
    
      test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#users').text()).toBe("Users");
      })
      test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#posts').text()).toBe("Posts");
      })
      test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#agentdetails').text()).toBe("Agent Details");
      })
  })