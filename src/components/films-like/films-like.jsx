import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {MoviesList} from 'components/movies-list/movies-list';
import withActiveItem from 'hocs/with-active-item/with-active-item';

const MoviesListWrapped = withActiveItem(MoviesList);

const FilmsLike = (props) => {
  const likeFilms = props.listCardFilms.filter((film) => film.genre === props.currentFilm.genre);
  let numberItem;

  likeFilms.forEach((film, i) => {
    if (film.id === props.currentFilm.id) {
      numberItem = i;
    }
  });

  likeFilms.splice(numberItem, 1);

  return likeFilms.length > 1 ? <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <MoviesListWrapped
      isLikeFilms={true}
      LikeFilms={likeFilms}
    />

  </section> : ``;
};

FilmsLike.propTypes = {
  listCardFilms: PropTypes.array.isRequired,
  currentFilm: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  listCardFilms: state.listCardFilms,
});

export default connect(mapStateToProps)(FilmsLike);
