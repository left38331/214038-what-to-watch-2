import React from 'react';
import {shallow} from 'enzyme';

import withActiveTab from 'hocs/with-active-tab/with-active-tab';

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveTab(MockComponent);

describe(`WithActiveTab work correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  it(`check default value of prop label`, () => {
    expect(wrapper.state().label).toEqual(`Overview`);
  });

  it(`init clickTabHandler func with other prop`, () => {
    wrapper.props().clickTabHandler(`Example`);
    expect(wrapper.props().label).toEqual(`Example`);
  });
});
