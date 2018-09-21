import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import { shallow } from 'enzyme';

import Login from './index';
import LoginForm from './LoginForm';

describe('<Login /> test', () => {
  const pushCallback = sinon.spy();
  const props = {
    history: {
      push: pushCallback,
    },
  };

  test('Should render login form', () => {
    const wrapper = shallow(<Login {...props}/>);

    expect(wrapper.find(LoginForm).length).toEqual(1);
  });

  test('Should execute .handleOnSubmit correctly', () => {
    const wrapper = shallow(<Login {...props}/>);

    const handleOnSubmit = wrapper.instance().handleOnSubmit;

    expect(handleOnSubmit).not.toBe('undefined');

    handleOnSubmit(); // Simulate invoking handleOnSubmit

    expect(pushCallback.called).toBeTruthy();
  });

  test('Should render login page', () => {
    const component = <Login {...props}/>
    shallow(component);

    const renderedComponent = renderer.create(component);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
