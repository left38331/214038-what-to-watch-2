import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducers/actions-creator';
import {Logo} from 'components/logo/logo';
import {UserBlock} from 'components/user-block/user-block';

const MovieCard = (props) => {
  return <section className="movie-card">
    <div className="movie-card__bg">
      <img src={props.promo.backgroundImage} alt={props.promo.title}/>
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <Logo/>
      <UserBlock
        isAuthorizationRequired={props.isAuthorizationRequired}
        avatar={props.avatar}
      />
    </header>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={props.promo.poster} alt={props.promo.title} width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{props.promo.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{props.promo.genre}</span>
            <span className="movie-card__year">{props.promo.released}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button" onClick={()=>props.setPlayingFilm(props.promo)}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

MovieCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {});

const mapDispatchToProps = (dispatch) => ({
  setPlayingFilm: (film) => {
    dispatch(ActionCreator.setPlayingFilm(film));
    dispatch(ActionCreator.setRunTime(film.runTime));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
