import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import App from 'components/app/app';

it(`App renders correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
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

  function createNodeMock(element) {
    if (element.type === `video`) {
      return {
        createRef() {}
      };
    }
    return null;
  }
  const options = {createNodeMock};
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>,
        options
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
