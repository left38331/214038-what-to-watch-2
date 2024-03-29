import React from 'react';
import {shallow} from 'enzyme';

import {CardFilm} from 'components/card-film/card-film';
import {films} from '../../mocks/films';

it(`Test click on title`, () => {
  const hoverHandler = jest.fn();
  const clickHandler = jest.fn();
  const props = {
    film: films[0],
    clickTitle: clickHandler,
    hoverCardHandler: hoverHandler,
    leaveCardHandler: ()=>{},
    isPlaying: false
  };
  const cardFilmComponent = shallow(<CardFilm {...props}/>);
  const href = cardFilmComponent.find(`.small-movie-card__link`);

  expect(href.props().to).toBe(`/films/${props.film.id}`);

  cardFilmComponent.simulate(`mouseEnter`);
  expect(hoverHandler).toHaveBeenCalledWith(films[0]);
});
