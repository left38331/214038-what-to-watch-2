import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducers/actions-creator';
import {connect} from 'react-redux';

export const GenreList = (props) => {
  return <ul className="catalog__genres-list">
    {props.genresList.map((item, i) => <li className={`catalog__genres-item ${item === props.genre ? `catalog__genres-item--active` : ``} `} key={i + item}>
      <a className="catalog__genres-link" onClick={()=> {
        props.onChangeGenre(item);
      }}>{item}</a>
    </li>)}
  </ul>;
};

GenreList.propTypes = {
  genresList: PropTypes.array.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  genresList: state.genresList,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenreSelected(genre));
    dispatch(ActionCreator.changeFilmsList(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
