import React from 'react';
import renderer from 'react-test-renderer';
import {CardFilm} from "components/card-film/card-film";
import {films} from "../../mocks/films";

it(`Render correctly card-film component`, () => {
  const cardFilmComponent = renderer.create(<CardFilm
    film = {films[0]}
    clickTitle = {()=>{}}
    hoverCardHandler = {()=>{}}
  />).toJSON();

  expect(cardFilmComponent).toMatchSnapshot();
});
