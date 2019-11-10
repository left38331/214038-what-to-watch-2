import React from 'react';
import PropTypes from 'prop-types';

import {GenreList} from 'components/genre/genre-list';
import {MoviesList} from 'components/movies-list/movies-list';
import {genresList} from '../../utils';

export const PageContent = (props) => {
  const clickTitle = () => {};

  return <div className="page-content">
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList genresList={[...genresList]} activeGenre={props.activeGenre} onChangeGenre={props.onChangeGenre}/>

      <MoviesList films={props.films} clickTitle={clickTitle} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

PageContent.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};
