import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from 'components/movie-card/movie-card';

it(`Render correctly movie-card component`, () => {
  const props = {
    avatar: `avatar.jpg`,
    isAuthorizationRequired: true,
  };

  const movieCardComponent = renderer.create(<MovieCard {...props}/>).toJSON();

  expect(movieCardComponent).toMatchSnapshot();
});
