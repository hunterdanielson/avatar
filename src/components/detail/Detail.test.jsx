import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail';

describe('Detail component', () => {
  it('renders Detail', () => {
    const wrapper = shallow(<Detail  name='Aang' photoUrl='pic.png' affiliation='avatar' enemies={['azula', 'ozai']} allies={['katara']}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
