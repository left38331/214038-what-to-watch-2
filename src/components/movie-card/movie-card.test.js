import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from 'components/movie-card/movie-card';

it(`Render correctly movie-card component`, () => {
  const movieCardComponent = renderer.create(<MovieCard/>).toJSON();

  expect(movieCardComponent).toMatchSnapshot();
});
