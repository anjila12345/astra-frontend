import React from 'react';
import { shallow } from 'enzyme';
import Jobpost from '../component/Agent/jobpost';
describe('Login component tests', () => {
  const wrapper = shallow(<Jobpost />);
  
  test('should have a btn component and href component should be named Submit', () => {

    //There should be only one button
    expect(wrapper.find('button')).toHaveLength(1);
    //Button should have matching text
    expect(wrapper.find('#insert').text()).toBe("Submit");
  })
  
  test("render the h3", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h3').text()).toContain("Post Job");
  });  

  it('should have input for email and password', () => {
    //Email and password input field should be present
    expect(wrapper.find('input#title'));
    expect(wrapper.find('textarea#desc'));
  });
  test('should have a href component and href component should be named clear', () => {

    //There should be only one button
    expect(wrapper.find('href'));
    //Button should have matching text
    expect(wrapper.find('#clear').text()).toBe("Clear");
  })
  

  test('should have an empty fullname, address, number, email and password state var', ()=> {
    //Optionally test to check if password and email are empty strings on 
    expect(wrapper.state('title')).toEqual('');
    expect(wrapper.state('desc'));
});


});