import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {Logo} from 'components/logo/logo';
import {films} from '../../mocks/films';

const props = {
  isAuthorizationRequired: false,
  avatar: `/img/egor-forever-yang.jpg`,
  listCardFilms: films,
  currentFilm: films[0]
};

it(`Render correctly logo block component`, () => {
  const logo = renderer.create(<BrowserRouter><Logo {...props} /></BrowserRouter>).toJSON();

  expect(logo).toMatchSnapshot();
});
