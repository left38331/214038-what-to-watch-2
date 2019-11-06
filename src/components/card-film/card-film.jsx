import React from 'react';
import PropTypes from 'prop-types';

export const CardFilm = (props) => {
  const {film, clickTitle, hoverCardHandler} = props;

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={()=> hoverCardHandler(film)}>
    <div className="small-movie-card__image">
      <img src={film.src} alt={film.alt} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href={film.link} onClick={clickTitle}>{film.title}</a>
    </h3>
  </article>;
};

CardFilm.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  clickTitle: PropTypes.func.isRequired,
  hoverCardHandler: PropTypes.func.isRequired
};
