import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {FavoriteList} from 'components/favorite-list/favorite-list';
import {films} from '../../mocks/films';

const props = {
  isAuthorizationRequired: false,
  avatar: `/img/egor-forever-yang.jpg`,
  favoriteFilms: films
};

it(`Render correctly favorite-film block component`, () => {
  const favoriteBlock = renderer.create(<BrowserRouter><FavoriteList {...props} /></BrowserRouter>).toJSON();

  expect(favoriteBlock).toMatchSnapshot();
});
