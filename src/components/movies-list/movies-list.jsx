import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {CardFilm} from 'components/card-film/card-film';

export const MoviesList = (props) => {
  return <div className="catalog__movies-list">
    {props.listCardFilms.map((item) => <CardFilm key={item.id} film={item} clickTitle={props.clickTitle} hoverCardHandler={props.hoverCardHandler} isPlaying={props.isPlaying === item[`id`]} leaveCardHandler={props.leaveCardHandler}/>)}
  </div>;
};

MoviesList.propTypes = {
  listCardFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
  isPlaying: PropTypes.number.isRequired,
  clickTitle: PropTypes.func.isRequired,
  hoverCardHandler: PropTypes.func.isRequired,
  leaveCardHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  listCardFilms: state.listCardFilms
});

export default connect(mapStateToProps)(MoviesList);
