import React from 'react';
import {MainPage} from 'components/main-page/main-page';
import PropTypes from 'prop-types';

export const App = (props) => {
  return <MainPage
    films={props.films}
  />;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }))
};
