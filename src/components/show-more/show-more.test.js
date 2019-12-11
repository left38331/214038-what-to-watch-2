import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {ShowMore} from 'components/show-more/show-more';

const props = {
  onShowMoreBtnClick: () => {},
  shouldShowMore: true
};

it(`Render correctly show-more block component`, () => {
  const showMore = renderer.create(<BrowserRouter><ShowMore {...props} /></BrowserRouter>).toJSON();

  expect(showMore).toMatchSnapshot();
});
