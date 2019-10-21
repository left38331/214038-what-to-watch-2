import React from 'react';
import {Genre} from "../genre/genre";
import {CardFilm} from "../card-film/card-film";

export const PageContent = () => {
  const allGenres = [`Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
  const filmsName = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Agent 007`];
  const clickTitle = () => {};

  return <div className="page-content">
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        {allGenres.map((item, i) => <Genre key={item + i} genre={item} />)}
      </ul>

      <div className="catalog__movies-list">
        {filmsName.map((item, i) => <CardFilm key={item + i} name={item} clickTitle={clickTitle}/>)}
      </div>

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
