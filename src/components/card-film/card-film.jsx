import React from 'react';
import PropTypes from 'prop-types';

export const CardFilm = (props) => {
  const {name, clickTitle} = props;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html" onClick={clickTitle}>{name}</a>
    </h3>
  </article>;
};

CardFilm.propTypes = {
  name: PropTypes.oneOf([`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Agent 007`]),
  clickTitle: PropTypes.func.isRequired
};
