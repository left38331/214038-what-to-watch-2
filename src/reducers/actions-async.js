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
  }
};

export {Operation, processedData};
