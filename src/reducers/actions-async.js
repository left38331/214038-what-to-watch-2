import {ActionCreator} from './actions-creator';
import {getAllGenres} from '../utils';
import ModelMovie from '../model-film';

let processedData = [];

const Operation = {
  loadFilms: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        processedData = ModelMovie.parseMovies(response.data);

        dispatch(ActionCreator.loadFilms(processedData));
        dispatch(ActionCreator.getGenres(getAllGenres(response.data)));
      });
  },

  loadPromo: () => (dispatch, _, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        processedData = ModelMovie.parseMovie(response.data);
        dispatch(ActionCreator.loadPromo(processedData));
      });
  },

  getComments: (idComment) => (dispatch, _, api) => {
    return api.get(`/comments/${idComment}`)
      .then((response) => {
        dispatch(ActionCreator.getComments(response.data));
      });
  },

  getFavoriteFilms: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        processedData = ModelMovie.parseMovies(response.data);
        dispatch(ActionCreator.getFavoriteFilms(processedData));
      });
  },

  postUserLogin: (userData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: userData.email,
      password: userData.password
    })
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.requireAuthorization(false));
          dispatch(ActionCreator.singInUser(response.data));
        }
      });
  },

  postComment: (review, id) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, review)
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.successPostComment(true));
        }
      });
  },

  toggleFavoriteFilm: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        if (response) {
          dispatch(Operation.loadFilms());
          dispatch(Operation.loadPromo());
        }
      });
  },
};

export {Operation};
