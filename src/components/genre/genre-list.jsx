import React from 'react';
import PropTypes from 'prop-types';

export const GenreList = (props) => {
  return <ul className="catalog__genres-list">
    {props.genresList.map((item, i) => <li className={`catalog__genres-item ${item === props.activeGenre ? `catalog__genres-item--active` : ``} `} key={i + item}>
      <a href="#" className="catalog__genres-link" onClick={()=> {
        props.onChangeGenre(item);
      }}>{item}</a>
    </li>)}
  </ul>;
};

GenreList.propTypes = {
  genresList: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};
