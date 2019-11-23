import {getFilmsByGenre} from '../utils';

export const ActionCreator = {
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
};
