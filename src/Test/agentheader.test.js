import React from 'react';
import { shallow } from 'enzyme';
import Aheader from '../component/Agent/header';
describe('Aheader component tests', () => {
  const wrapper = shallow(<Aheader />);

  test('should have a href component and href component should be named home', () => {

    //There should be only one button
    expect(wrapper.find('href'));
    //Button should have matching text
    expect(wrapper.find('#home').text()).toBe("Home");
  })

  test('should have a href component and href component should be named profile', () => {

    //There should be only one button
    expect(wrapper.find('href'));
    //Button should have matching text
    expect(wrapper.find('#profile').text()).toBe("Profile");
  })

  test('should have a href component and href component should be named mypost', () => {

    //There should be only one button
    expect(wrapper.find('href'));
    //Button should have matching text
    expect(wrapper.find('#mypost').text()).toBe("Mypost");
  })

  test('should have a href component and href component should be named post', () => {

    //There should be only one button
    expect(wrapper.find('href'));
    //Button should have matching text
    expect(wrapper.find('#post').text()).toBe("Post");
  })
  test('should have a href component and href component should be named logout', () => {

    //There should be only one button
    expect(wrapper.find('href'));
    //Button should have matching text
    expect(wrapper.find('#logout').text()).toBe("Logout");
  })

})