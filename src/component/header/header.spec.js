import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../../Utils/index';  
import Header from './index';

const setUp = (props={}) => {
   const component = shallow(<Header {...props}/>);
   return component;
};



describe('Header Component', () => {

   let component;
   beforeEach(() => {
      component = setUp();
   });


it('It should render without error', () => {
  
   const wrapper = findByTestAtrr(component, 'headerComponent');
   expect(wrapper.length).toBe(1);
});

it('Should render logo', () => { 
   const logo = findByTestAtrr(component, 'logoIMG');
   expect(logo.length).toBe(1);
   });

});