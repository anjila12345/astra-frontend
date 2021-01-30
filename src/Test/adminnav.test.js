import React from 'react';
import { shallow } from 'enzyme';
import Adminnav from '../component/Admin/AdminNavi';
describe('Adminnav component tests', () => {
    const wrapper = shallow(<Adminnav />);

    test('should have a href component and href component should be named home', () => {
  
      //There should be only one button
      expect(wrapper.find('href'));
      //Button should have matching text
      expect(wrapper.find('#dashboard').text()).toBe("Dashboard");
    })
    
      test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#admindetail').text()).toBe("Admin Detail");
      })
      test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#userdetail').text()).toBe("User Detail");
      })
      test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#agentdetail').text()).toBe("Agent Detail");
      })
      test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#postdetail').text()).toBe("Post Detail");
      })
      test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#createadmin').text()).toBe("Create Admin");
      })
      test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#logout').text()).toBe("Logout");
      })
  })