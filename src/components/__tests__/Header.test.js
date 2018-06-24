import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';
import NavBar from '../NavBar';

const component = shallow(<Header/>);

it('shows NavBar component', () => {
  expect(component.find(NavBar).length).toEqual(1);
});
