import React from 'react';
import renderer from 'react-test-renderer';

import {GenreList} from 'components/genre-list/genre-list';

it(`Render correctly genre list component`, () => {
  const props = {
    genresList: [`Comedies`, `Drama`],
    genre: `Drama`,
    onChangeGenre: ()=>{}
  };
  const genreComponent = renderer.create(<GenreList {...props} />).toJSON();

  expect(genreComponent).toMatchSnapshot();
});
