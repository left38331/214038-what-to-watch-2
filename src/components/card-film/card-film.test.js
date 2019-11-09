import React from 'react';
import renderer from 'react-test-renderer';
import {CardFilm} from 'components/card-film/card-film';
import {films} from '../../mocks/films';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {
      createRef() {}
    };
  }
  return null;
}

it(`Render correctly card-film component`, () => {
  const options = {createNodeMock};
  const cardFilmComponent = renderer.create(<CardFilm
    film = {films[0]}
    isPlaying = {false}
    clickTitle = {()=>{}}
    hoverCardHandler = {()=>{}}
    leaveCardHandler = {()=>{}}
  />, options).toJSON();

  expect(cardFilmComponent).toMatchSnapshot();
});
