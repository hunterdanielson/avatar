import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail';

describe('Detail component', () => {
  it('renders Detail', () => {
    const wrapper = shallow(<Detail  name='Aang' affiliation='avatar' enemies={['azula', 'ozai']} allies={['katara']}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
