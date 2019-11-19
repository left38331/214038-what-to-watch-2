import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {CardFilm} from 'components/card-film/card-film';

export const MoviesList = (props) => {
  let films;
  if (props.activeFilms.length === 0) {
    films = props.listCardFilms;
  } else {
    films = props.activeFilms;
  }

  return <div className="catalog__movies-list">
    {films.map((item) => <CardFilm key={item[`id`]} film={item} clickTitle={props.clickTitle} hoverCardHandler={props.hoverCardHandler} isPlaying={props.isPlaying === item[`id`]} leaveCardHandler={props.leaveCardHandler}/>)}
  </div>;
};

MoviesList.propTypes = {
  listCardFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  isPlaying: PropTypes.number.isRequired,
  clickTitle: PropTypes.func.isRequired,
  hoverCardHandler: PropTypes.func.isRequired,
  leaveCardHandler: PropTypes.func.isRequired,
  activeFilms: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  listCardFilms: state.listCardFilms,
  activeFilms: state.activeFilms
});

export default connect(mapStateToProps)(MoviesList);
