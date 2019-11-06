import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from 'components/movies-list/movies-list';
import {films} from '../../mocks/films';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {
      createRef() {}
    };
  }
  return null;
}

it(`Render correctly movies-list component`, () => {
  const options = {createNodeMock};
  const moviesListComponent = renderer.create(<MoviesList
    films={films}
    hoverCardHandler = {()=>{}}
    clickTitle = {()=>{}}
  />, options).toJSON();

  expect(moviesListComponent).toMatchSnapshot();
});
