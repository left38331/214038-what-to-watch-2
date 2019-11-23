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
  }
};

export {Operation};
