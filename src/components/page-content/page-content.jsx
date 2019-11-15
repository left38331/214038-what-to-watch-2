import React from 'react';

import GenreList from 'components/genre-list/genre-list';
import MoviesList from 'components/movies-list/movies-list';
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MoviesListWrapped = withActiveItem(MoviesList);

export const PageContent = () => {
  const clickTitle = () => {};

  return <div className="page-content">
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList/>

      <MoviesListWrapped clickTitle={clickTitle} />

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
