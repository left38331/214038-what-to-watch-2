import React from 'react';
import {shallow} from 'enzyme';

import withCommentAdd from 'hocs/with-comment-add/with-comment-add';

const MockComponent = () => <div/>;
const MockComponentWrapped = withCommentAdd(MockComponent);

describe(`WithCommentAdd work correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  it(`check default value of prop isDesable`, () => {
    expect(wrapper.state().isDisable).toEqual(true);
  });

  it(`init unDisableBtn func with other prop`, () => {
    wrapper.props().unDisableBtn(false);
    expect(wrapper.props().isDisable).toEqual(false);
  });
});
