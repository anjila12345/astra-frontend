import React from 'react';
import { shallow } from 'enzyme';
import Register from '../component/register';
describe('Login component tests', () => {
  const wrapper = shallow(<Register />);
  test('should have a btn component and btn component should be named signup', () => {

    //There should be only one button
    expect(wrapper.find('button')).toHaveLength(1);
    //Button should have matching text
    expect(wrapper.find('#Signup').text()).toBe("Sign Up");
  })
  test('should have a href component and href component should be named Signup', () => {

    //There should be only one button
    expect(wrapper.find('href'));
    //Button should have matching text
    expect(wrapper.find('#loginf').text()).toBe("Already have an Account ?");
  })
  
  test("render the h2", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h2').text()).toContain("Register Here");
  });

  

});