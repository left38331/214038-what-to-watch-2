import React from 'react';
import {ManePage} from "components/main-page/mane-page";
import PropTypes from "prop-types";

export const App = (props) => {
  return <ManePage
    films={props.films}
  />;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }))
};
