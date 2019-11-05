import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from 'components/movies-list/movies-list';
import {films} from '../../mocks/films';

it(`Render correctly movies-list component`, () => {
  const moviesListComponent = renderer.create(<MoviesList
    films={films}
    hoverCardHandler = {()=>{}}
    clickTitle = {()=>{}}
  />).toJSON();

  expect(moviesListComponent).toMatchSnapshot();
});
