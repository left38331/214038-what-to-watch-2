import React from 'react';
import {shallow} from 'enzyme';

import withShowMore from 'hocs/with-show-more/with-show-more';

const MockComponent = () => <div/>;
const MockComponentWrapped = withShowMore(MockComponent);

describe(`WithShowMore work correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  it(`check default value of prop films`, () => {
    expect(wrapper.state().films).toEqual(`first`);
  });

  it(`init showAllFilms func with other prop`, () => {
    wrapper.props().showAllFilms(`all`);
    expect(wrapper.props().isShowAll).toEqual(`all`);
  });
});
