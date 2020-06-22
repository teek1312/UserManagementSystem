import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from './../application/App';
import {store} from '../store';

Enzyme.configure({ 
  adapter: new Adapter(),
  disableLifecycleMethods: true
});
const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const setUp = () => {
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
};

const mountApplication =  mount(
  <Provider store={store}>
      <App />
  </Provider>);

describe('App Component', () => {

  const wrapper = mountApplication;

  it('Should render without errors', () => {
    console.log(wrapper.debug());
    // expect(wrapper.find('.app').childAt(0)).toBe(1);
  });
});
