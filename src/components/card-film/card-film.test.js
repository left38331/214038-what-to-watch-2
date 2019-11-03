import React from 'react';
import renderer from 'react-test-renderer';
import {CardFilm} from "components/card-film/card-film";

it(`Render correctly card-film component`, () => {
  const cardFilmComponent = renderer.create(<CardFilm
    name = {`Fantastic Beasts`}
    clickTitle = {()=>{}}
  />).toJSON();

  expect(cardFilmComponent).toMatchSnapshot();
});
