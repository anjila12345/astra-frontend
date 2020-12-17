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

  it('should have input for email and password', () => {
    //Email and password input field should be present
    expect(wrapper.find('input#firstname')).toHaveLength(1);
    expect(wrapper.find('input#lastname')).toHaveLength(1);
    expect(wrapper.find('input#email')).toHaveLength(1);
    expect(wrapper.find('input#username')).toHaveLength(1);
    expect(wrapper.find('input#password')).toHaveLength(1);
  });

  it('should have an empty email and password state var', () => {
    //Optionally test to check if password and email are empty strings on 
    expect(wrapper.state('firstname')).toEqual('');
    expect(wrapper.state('lastname')).toEqual('');
    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('username')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
  });

});