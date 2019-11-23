import React from 'react';
import PropTypes from 'prop-types';

import {VideoPlayer} from 'components/video-player/video-player';

export const CardFilm = (props) => {
  return <article className="small-movie-card catalog__movies-card" onMouseEnter={()=> props.hoverCardHandler(props.film)} onMouseLeave={props.leaveCardHandler}>
    <div className="small-movie-card__image">
      <VideoPlayer
        poster={props.film.poster}
        preview={props.film.preview}
        isPlaying={props.isPlaying}
        muted={true}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="#" onClick={props.clickTitle}>{props.film.title}</a>
    </h3>
  </article>;
};

CardFilm.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  clickTitle: PropTypes.func.isRequired,
  hoverCardHandler: PropTypes.func.isRequired,
  leaveCardHandler: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};
