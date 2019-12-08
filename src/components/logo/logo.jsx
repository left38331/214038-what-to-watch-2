import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Logo = () => {
  return <div className="logo">
    <Link to="/" className="logo__link">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>;
};

// Logo.propTypes = {
//   isPlaying: PropTypes.bool.isRequired,
//   preview: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired,
//   muted: PropTypes.bool.isRequired
// };

export {Logo};
