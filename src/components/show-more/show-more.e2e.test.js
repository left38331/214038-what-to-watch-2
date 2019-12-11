import React from 'react';
import {mount} from 'enzyme';

import {ShowMore} from 'components/show-more/show-more';

describe(`Detect correctly work show-more button`, () => {
  const showMoreButtonWrapper = mount(<ShowMore
    onShowMoreBtnClick={jest.fn()}
    shouldShowMore={true}
  />);

  let buttonElement = showMoreButtonWrapper.find(`.catalog__button`);

  it(`button is exist`, () => {
    expect(showMoreButtonWrapper.props().shouldShowMore).toEqual(true);
    expect(buttonElement).toHaveLength(1);
  });

  it(`if shouldShowMore false - button not exist`, () => {
    showMoreButtonWrapper.setProps({shouldShowMore: false});
    expect(showMoreButtonWrapper.props().shouldShowMore).toEqual(false);
    buttonElement = showMoreButtonWrapper.render().find(`button`);
    expect(buttonElement).toHaveLength(0);
  });

  it(`has to be button element if shouldShowButton prop is true again`, () => {
    showMoreButtonWrapper.setProps({shouldShowMore: true});
    expect(showMoreButtonWrapper.props().shouldShowMore).toEqual(true);
    buttonElement = showMoreButtonWrapper.render().find(`button`);
    expect(buttonElement).toHaveLength(1);
  });
});
