import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import MoviePageDetail from 'components/movie-page-detail/movie-page-detail';
import {films} from '../../mocks/films';

it(`Render correctly movie-page-detail component`, () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const initialState = {
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
  };
  const store = mockStore(initialState);
  const props = {
    listCardFilms: films,
    history: {},
    match: {},
    clickTabHandler: ()=>{},
    toggleFavoriteFilm: ()=>{},
    setPlayingFilm: ()=>{},
    comments: [],
    label: `true`,
    isAuthorizationRequired: true,
    avatar: `avatar.jpg`,
    activeFilms: []
  };
  const moviePageDetail = renderer.create(<BrowserRouter><Provider store={store}><MoviePageDetail {...props}/></Provider></BrowserRouter>).toJSON();

  expect(moviePageDetail).toMatchSnapshot();
});
