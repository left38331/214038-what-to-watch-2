import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {FilmsLike} from 'components/films-like/films-like';
import {films} from '../../mocks/films';

const props = {
  isAuthorizationRequired: false,
  avatar: `/img/egor-forever-yang.jpg`,
  listCardFilms: films,
  currentFilm: films[0]
};

it(`Render correctly films like block component`, () => {
  const filmsLike = renderer.create(<BrowserRouter><FilmsLike {...props} /></BrowserRouter>).toJSON();

  expect(filmsLike).toMatchSnapshot();
});
