import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {VideoPlayer} from 'components/video-player/video-player';

const CardFilm = (props) => {
  return <article className="small-movie-card catalog__movies-card" onMouseEnter={()=> props.hoverCardHandler(props.film)} onMouseLeave={props.leaveCardHandler}>
    <Link to={`/films/${props.film.id}`}>
      <div className="small-movie-card__image">
        <VideoPlayer
          poster={props.film.poster}
          preview={props.film.preview}
          isPlaying={props.isPlaying}
          muted={true}
        />
      </div>
    </Link>
    <h3 className="small-movie-card__title">
      <Link to={`/films/${props.film.id}`} className="small-movie-card__link">{props.film.title}</Link>
    </h3>
  </article>;
};

CardFilm.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  hoverCardHandler: PropTypes.func.isRequired,
  leaveCardHandler: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export {CardFilm};
