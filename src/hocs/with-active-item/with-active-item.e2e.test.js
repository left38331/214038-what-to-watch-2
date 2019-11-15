import React from "react";
import {shallow} from 'enzyme';
import withActiveItem from './with-active-item';

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`WithActiveItem work correctly`, () => {
  it(`All items are not active - default state`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    expect(wrapper.state().activeFilmId).toEqual(-1);
  });
});
