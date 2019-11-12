import React from 'react';

import {MovieCard} from 'components/movie-card/movie-card';
import {PageContent} from 'components/page-content/page-content';

export const App = () => {
  return <React.Fragment>
    <MovieCard/>
    <PageContent/>
  </React.Fragment>;
};
