import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import renderer from 'react-test-renderer';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
