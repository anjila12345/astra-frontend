import React from 'react';
import { shallow } from 'enzyme';
import Login from '../component/Agent/login';
describe('Login component tests', () => {
  const wrapper = shallow(<Login />);
  test('should have a btn component and btn component should be named signin', () => {

    //There should be only one button
    expect(wrapper.find('button')).toHaveLength(1);
    //Button should have matching text
    expect(wrapper.find('#Signin').text()).toBe("Sign In");
  })
  test('should have a href component and href component should be named Signup', () => {

    //There should be only one button
    expect(wrapper.find('href'));
    //Button should have matching text
    expect(wrapper.find('#registerh').text()).toBe("Register Now");
  })
  
  test("render the h2", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h2').text()).toContain("Log In");
  });

  it('should have input for email and password', () => {
    //Email and password input field should be present
    expect(wrapper.find('input#username')).toHaveLength(1);
    expect(wrapper.find('input#password')).toHaveLength(1);
  });

  it('should have an empty email and password state var', () => {
    //Optionally test to check if password and email are empty strings on 

    expect(wrapper.state('username')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
  });


});