import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import ContractNumberSearch from './index.js'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

configure({ adapter: new Adapter() });

const mockStore = configureStore()
const initialState = {
    contractNumber: ''
}
const store = mockStore(initialState)

describe('Contract Number Search', () => {
    test('renders the component', () => {
        const title = 'CNS';
        const compType = 'CNS';
        const commandActions = jest.fn();
        const wrapper = shallow(<ContractNumberSearch
            store={store}
            title={title}
            compType={compType}
            commandActions={commandActions}
            />);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });
    test('search button sends input to next page', () => {
        const title = 'CNS input send';
        const compType = 'CNS Button';
        const commandActions = jest.fn();
        const wrapper = shallow(<ContractNumberSearch
            store={store}
            title={title}
            compType={compType}
            commandActions={commandActions}
        />);
        console.log(wrapper.dive().find('SearchField').debug());
        // let currentState = component.setState({'contractNumber':'test1234'})
        // console.log('This is component state: ', component.state());
        // expect(component.state().contractNumber).toEqual('test1234')
    })
});
