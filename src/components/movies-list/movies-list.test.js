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
  const props = {
    listCardFilms: films,
    hoverCardHandler: ()=>{},
    leaveCardHandler: ()=>{},
    isPlaying: -1,
    clickTitle: ()=>{},
    activeFilms: []
  };
  const moviesListComponent = renderer.create(<MoviesList {...props}/>, options).toJSON();

  expect(moviesListComponent).toMatchSnapshot();
});
