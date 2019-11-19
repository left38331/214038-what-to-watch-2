import MockAdapter from 'axios-mock-adapter';

import {ActionCreator} from './actions-creator';
import {reducer} from './reducer';
import createAPI from '../api';
import {Operation} from './actions-async';

describe(`Action creators works correctly`, () => {
  it(`Action creator for change genre`, () => {
    expect(ActionCreator.changeGenreSelected(`Drama`)).toEqual({
      type: `CHANGE_GENRE_SELECTED`,
      payload: `Drama`
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      listCardFilms: [],
      genresList: [],
      activeFilms: []
    });
  });

  it(`Should make a correct API call to /films`, () => {
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFilms = Operation.loadFilms();

    const data = {
      genre: `drama`,
      id: 1,
    };

    apiMock
      .onGet(`/films`)
      .reply(200, [data]);

    return loadFilms(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_FILMS`,
          payload: [data]
        });
      });
  });
});
