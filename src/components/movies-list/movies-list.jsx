import React from 'react';
import PropTypes from 'prop-types';

import {CardFilm} from 'components/card-film/card-film';

const MoviesList = (props) => {
  let films;

  if (props.isLikeFilms) {
    films = props.LikeFilms;
  } else {
    films = props.listCardFilms;
  }

  return <div className="catalog__movies-list">
    {films.map((item) => <CardFilm key={item[`id`]} film={item} hoverCardHandler={props.hoverCardHandler} isPlaying={props.isPlaying === item[`id`]} leaveCardHandler={props.leaveCardHandler}/>)}
  </div>;
};

MoviesList.propTypes = {
  listCardFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  isPlaying: PropTypes.number.isRequired,
  hoverCardHandler: PropTypes.func.isRequired,
  leaveCardHandler: PropTypes.func.isRequired,
  activeFilms: PropTypes.array,
  isLikeFilms: PropTypes.bool,
  LikeFilms: PropTypes.array,
};

export {MoviesList};
