import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import { mount } from 'enzyme';

import LoginForm from './LoginForm';

describe('<LoginForm /> test', () => {
  const onSubmit = jest.fn();

  test('Should display errors if exists', () => {
    const wrapper = mount(<LoginForm onSubmit={onSubmit} />);

    // No errors should be displayed at first
    expect(wrapper.find('span.error').length).toEqual(0);

    wrapper.setState({
      errors: {
        password: 'has password error',
        email: 'email has error',
      },
    });

    expect(wrapper.find('span.error').length).toEqual(2);
  });

  test('Should update state on input change', () => {
    const wrapper = mount(<LoginForm onSubmit={onSubmit} />);

    const input = wrapper.find('input').first();

    input.simulate('change', { target: { name: 'email', value: 'test@email.com' } });
    input.simulate('change', { target: { name: 'password', value: '1234' } });

    expect(wrapper.state().data.email).toEqual('test@email.com');
    expect(wrapper.state().data.password).toEqual('1234');
  });

  test('Should call onSubmit prop if form data is valid', () => {
    const onSubmitCallback = sinon.spy();
    const wrapper = mount(<LoginForm onSubmit={onSubmitCallback} />);
    wrapper.setState({
      data: {
        email: 'test@email.com',
        password: '1234',
      },
    })

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(onSubmitCallback.called).toBeTruthy();
  });

  test('Should not call onSubmit prop if form data invalid', () => {
    const onSubmitCallback = sinon.spy();
    const wrapper = mount(<LoginForm onSubmit={onSubmitCallback} />);
    wrapper.setState({
      data: {
        email: 'test@email',
        password: '',
      },
    })

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(wrapper.state().errors.email).not.toBeNull();
    expect(wrapper.state().errors.password).not.toBeNull();
    expect(onSubmitCallback.called).toBeFalsy();
  });

  test('Should render login form', () => {
    const component = <LoginForm onSubmit={onSubmit} />;
    const wrapper = mount(component);

    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(2);
    expect(wrapper.find('button').length).toEqual(1);

    const renderedComponent = renderer.create(component);
    const tree = renderedComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

