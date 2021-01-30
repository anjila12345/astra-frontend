import React from 'react';
import { shallow } from 'enzyme';
import Editprofile from '../component/Admin/editprofile';
describe('Login component tests', () => {
  const wrapper = shallow(<Editprofile />);
  test('should have a btn component and btn component should be named Save', () => {

    //There should be only one button
    expect(wrapper.find('button')).toHaveLength(2);
    //Button should have matching text
    expect(wrapper.find('#submitt'));
  })
  test("render the h3", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h3').text()).toContain("Account Information");
  });  
  test("render the click event Updateprofile",()=>{
    wrapper.find('#submitt').simulate("click");
    }); 

    test('should have a href component and href component should be named home', () => {
  
        //There should be only one button
        expect(wrapper.find('href'));
        //Button should have matching text
        expect(wrapper.find('#clear'));
      });
      it('should have input for email and password', () => {
        //Email and password input field should be present
        expect(wrapper.find('input#title'));
        expect(wrapper.find('textarea#desc'));
        expect(wrapper.find('textarea#email'));
      });
    
      test('should have an empty fullname, address, number, email and password state var', ()=> {
        //Optionally test to check if password and email are empty strings on 
        expect(wrapper.state('title'));
        expect(wrapper.state('desc'));
        expect(wrapper.state('email'));
    });
});