import React from 'react';
import { shallow } from 'enzyme';
import Editprofile from '../component/Agent/editprofile';
describe('Login component tests', () => {
  const wrapper = shallow(<Editprofile />);
  test('should have a btn component and btn component should be named Save', () => {

    //There should be only one button
    expect(wrapper.find('button')).toHaveLength(2);
    //Button should have matching text
    expect(wrapper.find('#save'));
  })
  test('should have a btn component and href component should be named Submit', () => {

    //There should be only one button
    expect(wrapper.find('button')).toHaveLength(2);
    //Button should have matching text
    expect(wrapper.find('#updatebtn').text()).toBe("Save");
  })
  test("render the h3", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h3').text()).toContain("Account Information");
  });  
  test("render the h2", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h2').text()).toContain("Profile");
  });

  it('should have input for email and password', () => {
    //Email and password input field should be present
    expect(wrapper.find('input#fname'));
    expect(wrapper.find('input#lname'));
    expect(wrapper.find('input#email'));
    expect(wrapper.find('input#username'));
    expect(wrapper.find('input#password'));
  });

  test('should have an empty fullname, address, number, email and password state var', ()=> {
    //Optionally test to check if password and email are empty strings on 
    expect(wrapper.state('fname'));
    expect(wrapper.state('lname'));
    expect(wrapper.state('email'));
    expect(wrapper.state('username'));
    expect(wrapper.state('password'));
});
test('should have a btn component and btn component should be named Save', () => {

  //There should be only one button
  expect(wrapper.find('button')).toHaveLength(2);
  //Button should have matching text
  expect(wrapper.find('#submitt'));
})

test("render the click event Updateprofile",()=>{
wrapper.find('#submitt').simulate("click");
}); 


test("render the click event Updateprofile",()=>{
  wrapper.find('#updatebtn').simulate("click");
  }); 
});