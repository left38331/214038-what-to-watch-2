import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {AddCommentBlock} from 'components/add-comment/add-comment';
import {films} from '../../mocks/films';

describe(`AddReview`, () => {
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
    isAuthorizationRequired: false,
    match: {
      params: {
        id: 1,
      }
    },
    films,
    successComment: false,
    avatar: `/img/egor-forever-yang.jpg`,
    isDisable: true,
    currentFilm: films[0]
  };

  it(`renders correctly add review block`, () => {
    const tree = renderer.create(
        <BrowserRouter><Provider store={store}><AddCommentBlock {...props} /></Provider></BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
