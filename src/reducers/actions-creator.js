import {getFilmsByGenre} from '../utils';

const ActionCreator = {
  changeGenreSelected: (genre) => ({
    type: `CHANGE_GENRE_SELECTED`,
    payload: genre
  }),

  changeFilmsList: (genre) => (dispatch, getState) => dispatch({
    type: `CHANGE_FILMS_LIST`,
    payload: getFilmsByGenre(genre, getState)
  }),

  loadFilms: (films) => ({
    type: `LOAD_FILMS`,
    payload: films
  }),

  loadPromo: (promo) => ({
    type: `LOAD_PROMO`,
    payload: promo
  }),

  getGenres: (genres) => ({
    type: `GET_GENRE`,
    payload: genres
  }),

  requireAuthorization: (status) => ({
    type: `REQUIRE_AUTHORIZATION`,
    payload: status
  }),

  singInUser: (userData) => ({
    type: `SING_IN_USER`,
    payload: userData
  }),

  setPlayingFilm: (film) => ({
    type: `SET_PLAYING_FILM`,
    payload: film
  }),

  setRunTime: (time) => ({
    type: `SET_TIME`,
    payload: time
  }),

  decrementTime: () => ({
    type: `DECREMENT_TIME`,
    payload: 1
  }),

  getComments: (comments) => ({
    type: `GET_COMMENTS`,
    payload: comments
  }),

  successPostComment: (value) => ({
    type: `SUCCESS_POST_COMMENT`,
    payload: value
  }),

  setCurrentFilm: (film) => ({
    type: `SET_CURRENT_FILM`,
    payload: film
  }),

  getFavoriteFilms: (films) => ({
    type: `GET_FAVORITE_FILMS`,
    payload: films
  })
};

export {ActionCreator};
