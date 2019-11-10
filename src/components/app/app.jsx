import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';
import {MovieCard} from 'components/movie-card/movie-card';
import {PageContent} from 'components/page-content/page-content';

export const App = (props) => {
  return <React.Fragment>
    <MovieCard/>
    <PageContent
      films={props.listCardFilms}
      activeGenre={props.genre}
      onChangeGenre={props.onChangeGenre}
    />
  </React.Fragment>;
};

App.propTypes = {
  listCardFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
  genre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  listCardFilms: state.listCardFilms
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenreSelected(genre));
    dispatch(ActionCreator.changeFilmsList(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
