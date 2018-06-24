import React from 'react';
import { shallow } from 'enzyme';

import App from '../../App';
import Header from '../Header';

const component = shallow(<App />);

it('shows Header component', () => {
  expect(component.find(Header).length).toEqual(1);
});
