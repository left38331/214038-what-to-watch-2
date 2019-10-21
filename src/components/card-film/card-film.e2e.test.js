import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CardFilm} from "./card-film";

Enzyme.configure({adapter: new Adapter()});

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
