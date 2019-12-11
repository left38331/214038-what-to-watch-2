import React from 'react';
import {shallow} from 'enzyme';

import withPlayerControl from 'hocs/with-player-control/with-player-control';

const MockComponent = () => <div/>;
const MockComponentWrapped = withPlayerControl(MockComponent);

describe(`WithPlayerControl work correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  it(`check default value of prop isPlaying`, () => {
    expect(wrapper.state().isPlaying).toEqual(false);
  });

  it(`init setStatusPlayer func with other prop`, () => {
    wrapper.props().setStatusPlayer(true);
    expect(wrapper.props().isPlaying).toEqual(true);
  });
});
