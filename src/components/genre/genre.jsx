import React from 'react';
import PropTypes from 'prop-types';

export const Genre = (props) => {
  const {genre} = props;

  return <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">{genre}</a>
  </li>;
};

Genre.propTypes = {
  genre: PropTypes.oneOf([`Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`])
};
