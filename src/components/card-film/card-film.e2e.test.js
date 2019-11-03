import React from 'react';
import {shallow} from 'enzyme';
import {CardFilm} from "components/card-film/card-film";

it(`Test click on title`, () => {
  const clickHandler = jest.fn();
  const props = {
    name: `Fantastic Beasts`,
    clickTitle: clickHandler
  };
  const cardFilmComponent = shallow(<CardFilm {...props}/>);
  const href = cardFilmComponent.find(`.small-movie-card__link`);

  href.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
