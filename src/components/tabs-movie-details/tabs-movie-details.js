import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import FilmsLike from 'components/films-like/films-like';
import {processRatingToWord} from '../../utils';
import {ActionCreator} from '../../reducers/actions-creator';
import {Logo} from 'components/logo/logo';
import {UserBlock} from 'components/user-block/user-block';
import {Operation} from "../../reducers/actions-async";

const MoviePageDetail = (props) => {
  const currentFilm = props.currentFilm;
  const getDate = (data) => {
    const year = data.getFullYear();
    const month = data.toLocaleString(`en-us`, {month: `long`});
    const date = data.getDate();
    return `${month} ${date} ${year}`;
  };

  const renderFilmDetail = () => {
    return <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: `${currentFilm.backgroundColor}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.title}/>
          </div>

          <header className="page-header movie-card__head">
            <Logo/>
            <UserBlock
              isAuthorizationRequired={props.isAuthorizationRequired}
              avatar={props.avatar}
            />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentFilm.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentFilm.genre}</span>
                <span className="movie-card__year">{currentFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => props.setPlayingFilm(currentFilm)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                {!props.isAuthorizationRequired &&
                <Link to={`/films/${props.match.params.id}/review`} className="btn movie-card__button">Add
                  review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentFilm.poster} alt={currentFilm.title} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className={`movie-nav__item ${props.label === `Overview` ? `movie-nav__item--active` : ``}`}>
                    <a className="movie-nav__link" onClick={() => props.clickTabHandler(`Overview`)} style={{cursor: `pointer`}}>Overview</a>
                  </li>
                  <li className={`movie-nav__item ${props.label === `Details` ? `movie-nav__item--active` : ``}`}>
                    <a className="movie-nav__link" onClick={() => props.clickTabHandler(`Details`)} style={{cursor: `pointer`}}>Details</a>
                  </li>
                  <li className={`movie-nav__item ${props.label === `Reviews` ? `movie-nav__item--active` : ``}`}>
                    <a className="movie-nav__link" onClick={() => props.clickTabHandler(`Reviews`)} style={{cursor: `pointer`}}>Reviews</a>
                  </li>
                </ul>
              </nav>

              <div style={props.label === `Overview` ? {display: `block`} : {display: `none`}}>
                <div className="movie-rating">
                  <div className="movie-rating__score">{currentFilm.rating}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{processRatingToWord(currentFilm.rating)}</span>
                    <span className="movie-rating__count">{currentFilm.scoresCount} ratings</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>{currentFilm.description}</p>

                  <p className="movie-card__director"><strong>Director: {currentFilm.director}</strong></p>

                  <p className="movie-card__starring"><strong>Starring: {currentFilm.starring.map((item) => {
                    return item;
                  }).join(`, `)}</strong></p>
                </div>
              </div>

              <div className="movie-card__text movie-card__row" style={props.label === `Details` ? {display: `block`} : {display: `none`}}>
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{currentFilm.director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      {currentFilm.starring.map((item) => {
                        return item;
                      }).join(`, `)}
                    </span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{currentFilm.runTime}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{currentFilm.genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{currentFilm.released}</span>
                  </p>
                </div>
              </div>

              <div className="movie-card__reviews movie-card__row" style={props.label === `Reviews` ? {display: `block`} : {display: `none`}}>
                <div className="movie-card__reviews-col">
                  {props.comments.map((comment, i) => {
                    return <div className="review" key={i}>
                      <blockquote className="review__quote">
                        <p className="review__text">{comment.comment}</p>
                        <footer className="review__details">
                          <cite className="review__author">{comment.user.name}</cite>
                          <time className="review__date" dateTime={comment.date}>{getDate(new Date(comment.date))}</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{comment.rating}</div>
                    </div>;
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <FilmsLike
          currentFilm={currentFilm}
        />

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>;
  };

  if (props.listCardFilms.length !== 0) {
    return renderFilmDetail();
  }
  return null;
};

MoviePageDetail.propTypes = {
  listCardFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  })),
  match: PropTypes.object.isRequired,
  clickTabHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  listCardFilms: state.listCardFilms,
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  setPlayingFilm: (film) => {
    dispatch(ActionCreator.setPlayingFilm(film));
    dispatch(ActionCreator.setRunTime(film.runTime));
  },
  onLoadFilms: () => {
    dispatch(Operation.loadFilms());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageDetail);
