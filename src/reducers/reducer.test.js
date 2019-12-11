import MockAdapter from 'axios-mock-adapter';

import {ActionCreator} from './actions-creator';
import {reducer} from './reducer';
import createAPI from '../api';
import {Operation} from './actions-async';
import {films} from '../mocks/films';

describe(`Action creators works correctly`, () => {
  it(`Action creator for change genre`, () => {
    expect(ActionCreator.changeGenreSelected(`Drama`)).toEqual({
      type: `CHANGE_GENRE_SELECTED`,
      payload: `Drama`
    });
  });

  it(`Action creator set current film`, () => {
    expect(ActionCreator.setCurrentFilm(films[0])).toEqual({
      type: `SET_CURRENT_FILM`,
      payload: films[0]
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      listCardFilms: [],
      promo: {},
      activeFilms: [],
      genresList: [],
      isAuthorizationRequired: true,
      avatarUrl: ``,
      email: ``,
      id: ``,
      name: ``,
      film: ``,
      time: ``,
      comments: [],
      isPostComment: false,
      favoriteFilms: []
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

  it(`Should make a correct API call to /films/promo`, () => {
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadPromo = Operation.loadPromo();

    const data = {
      genre: `drama`,
      id: 1,
    };

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [data]);

    return loadPromo(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to /comments/1`, () => {
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getComments = Operation.getComments(1);

    const data = [`abrakadabra1`, `abrakadabra2`];


    apiMock
      .onGet(`/comments/1`)
      .reply(200, [data]);

    return getComments(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `GET_COMMENTS`,
          payload: [data]
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getFavoriteFilms = Operation.getFavoriteFilms();

    const data = {
      genre: `drama`,
      id: 1,
    };

    apiMock
      .onGet(`/favorite`)
      .reply(200, [data]);

    return getFavoriteFilms(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `GET_FAVORITE_FILMS`,
          payload: [data]
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postUserLogin = Operation.postUserLogin(1);

    const data = {
      email: `drama@sdf.re`,
      password: 1,
    };

    apiMock
      .onPost(`/login`)
      .reply(200, [data]);

    return postUserLogin(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `REQUIRE_AUTHORIZATION`,
          payload: false
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: `SING_IN_USER`,
          payload: [data]
        });
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const postComment = Operation.postComment({rating: 5, comment: `Wow!`}, id);

    const data = {rating: 5, comment: `Wow!`};

    apiMock
      .onPost(`/comments/${id}`)
      .reply(200, [data]);

    return postComment(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `SUCCESS_POST_COMMENT`,
          payload: true
        });
      });
  });
});
