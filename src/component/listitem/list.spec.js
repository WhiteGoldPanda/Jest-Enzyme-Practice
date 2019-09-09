import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps} from './../../../Utils';
import ListItem from './index';


describe('List Item Component', () => {
    describe('Checking Proptypes', () => {

        it('should not call warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some Text'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some Text'
            };
            wrapper = shallow(<ListItem {...props}/>);

        });

        it('Should render with out errors', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render title with out errors',() => {
            const title = findByTestAtrr(wrapper,'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });

        
    });

    describe('should not render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some Text'
            };
            wrapper = shallow(<ListItem {...props}/>);

        });

        it('Componentn not rendered', () =>  {
            const component = findByTestAtrr(wrapper,'listItemComponent');
            expect(component.length).toBe(0);
        });
    });
    
    
    



});
