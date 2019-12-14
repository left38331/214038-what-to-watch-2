import {getFilmsByGenre} from '../utils';

const ActionType = {
  CHANGE_GENRE_SELECTED: `CHANGE_GENRE_SELECTED`,
  CHANGE_FILMS_LIST: `CHANGE_FILMS_LIST`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  GET_GENRE: `GET_GENRE`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SING_IN_USER: `SING_IN_USER`,
  SET_PLAYING_FILM: `SET_PLAYING_FILM`,
  SET_TIME: `SET_TIME`,
  DECREMENT_TIME: `DECREMENT_TIME`,
  GET_COMMENTS: `GET_COMMENTS`,
  SUCCESS_POST_COMMENT: `SUCCESS_POST_COMMENT`,
  SET_CURRENT_FILM: `SET_CURRENT_FILM`,
  GET_FAVORITE_FILMS: `GET_FAVORITE_FILMS`
};

const ActionCreator = {
  changeGenreSelected: (genre) => ({
    type: ActionType.CHANGE_GENRE_SELECTED,
    payload: genre
  }),

  changeFilmsList: (genre) => (dispatch, getState) => dispatch({
    type: ActionType.CHANGE_FILMS_LIST,
    payload: getFilmsByGenre(genre, getState)
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),

  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo
  }),

  getGenres: (genres) => ({
    type: ActionType.GET_GENRE,
    payload: genres
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),

  singInUser: (userData) => ({
    type: ActionType.SING_IN_USER,
    payload: userData
  }),

  setPlayingFilm: (film) => ({
    type: ActionType.SET_PLAYING_FILM,
    payload: film
  }),

  setRunTime: (time) => ({
    type: ActionType.SET_TIME,
    payload: time
  }),

  decrementTime: () => ({
    type: ActionType.DECREMENT_TIME,
    payload: 1
  }),

  getComments: (comments) => ({
    type: ActionType.GET_COMMENTS,
    payload: comments
  }),

  successPostComment: (value) => ({
    type: ActionType.SUCCESS_POST_COMMENT,
    payload: value
  }),

  setCurrentFilm: (film) => ({
    type: ActionType.SET_CURRENT_FILM,
    payload: film
  }),

  getFavoriteFilms: (films) => ({
    type: ActionType.GET_FAVORITE_FILMS,
    payload: films
  })
};

export {ActionCreator, ActionType};
