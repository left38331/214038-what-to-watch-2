import React from 'react';
import renderer from 'react-test-renderer';
import {Genre} from 'components/genre/genre';

it(`Render correctly genre component`, () => {
  const genreComponent = renderer.create(<Genre
    genre = {`Comedies`}
  />).toJSON();

  expect(genreComponent).toMatchSnapshot();
});
