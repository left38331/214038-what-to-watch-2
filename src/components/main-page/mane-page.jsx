import React from 'react';
import {MovieCard} from "components/movie-card/movie-card";
import {PageContent} from "components/page-content/page-content";
import PropTypes from "prop-types";

export const ManePage = (props) => {
  return <div>
    <MovieCard/>
    <PageContent
      films={props.films}
    />
  </div>;
};

ManePage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }))
};
