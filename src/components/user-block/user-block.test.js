import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {UserBlock} from 'components/user-block/user-block';
import {films} from '../../mocks/films';

const props = {
  isAuthorizationRequired: false,
  avatar: `/img/egor-forever-yang.jpg`,
  listCardFilms: films,
  currentFilm: films[0]
};

it(`Render correctly user block component`, () => {
  const userBlock = renderer.create(<BrowserRouter><UserBlock {...props} /></BrowserRouter>).toJSON();

  expect(userBlock).toMatchSnapshot();
});
