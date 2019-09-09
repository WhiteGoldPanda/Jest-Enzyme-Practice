import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps} from './../../../Utils';
import ReusedButton from './index';

describe('Reusable Button Component', () => {

    describe('checking proptypes', () => {
        
        it('Should not return a warning', () =>{
            const expectedProps = {
                buttonText: 'Example',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(ReusedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example',
                emitEvent: () => {

                }
            }
            wrapper = shallow(<ReusedButton {...props} />);
        });
        it('Should render button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);

        });
        
    });
    
    

    


});