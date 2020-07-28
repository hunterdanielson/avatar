import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List list={[{ _id: 1, name: 'Aang' }, { _id: 2, name: 'Zuko' }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
