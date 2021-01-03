import React from 'react';
import { shallow } from 'enzyme';
import Editprofile from '../component/Users/editprofile';
describe('Login component tests', () => {
  const wrapper = shallow(<Editprofile />);
  test('should have a btn component and btn component should be named Save', () => {

    //There should be only one button
    expect(wrapper.find('button')).toHaveLength(2);
    //Button should have matching text
    expect(wrapper.find('#save').text()).toBe("Save");
  })
  test('should have a btn component and href component should be named Submit', () => {

    //There should be only one button
    expect(wrapper.find('button')).toHaveLength(2);
    //Button should have matching text
    expect(wrapper.find('#Submit').text()).toBe("Submit");
  })
  test("render the h1", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h1').text()).toContain("Profile");
  });  
  test("render the h2", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h2').text()).toContain("Account Information");
  });

  it('should have input for email and password', () => {
    //Email and password input field should be present
    expect(wrapper.find('input#fname')).toHaveLength(1);
    expect(wrapper.find('input#lname')).toHaveLength(1);
    expect(wrapper.find('input#email')).toHaveLength(1);
    expect(wrapper.find('input#username')).toHaveLength(1);
  });

  test('should have an empty fullname, address, number, email and password state var', ()=> {
    //Optionally test to check if password and email are empty strings on 
    expect(wrapper.state('fname'));
    expect(wrapper.state('lname'));
    expect(wrapper.state('email'));
    expect(wrapper.state('username'));
    expect(wrapper.state('password'));
});

test("render the click event Updateprofile",()=>{
wrapper.find('#Submit').simulate("click");
}); 
});