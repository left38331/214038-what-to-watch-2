import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MovieCard} from 'components/movie-card/movie-card';
import {films} from '../../mocks/films';

it(`Render correctly movie-card component`, () => {
  const props = {
    avatar: `avatar.jpg`,
    isAuthorizationRequired: true,
    setPlayingFilm: () => {},
    toggleFavoriteFilm: () => {},
    promo: films[0],
  };

  const movieCardComponent = renderer.create(<BrowserRouter><MovieCard {...props}/></BrowserRouter>).toJSON();

  expect(movieCardComponent).toMatchSnapshot();
});
