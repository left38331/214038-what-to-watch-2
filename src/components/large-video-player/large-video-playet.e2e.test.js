import React from 'react';
import {mount} from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import LargeVideoPlayer from 'components/large-video-player/large-video-player';
import {films} from '../../mocks/films';

describe(`Correct work large video player`, () => {
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
    time: 100,
    comments: [],
    isPostComment: false,
    favoriteFilms: []
  };
  const store = mockStore(initialState);
  const props = {
    isPlaying: true,
    setStatusPlayer: jest.fn(),
    setPlayingFilm: jest.fn(),
    film: films[0]
  };

  const BigPlayerWrapper = mount(<Provider store={store}><LargeVideoPlayer {...props}/></Provider>);
  const buttonElement = BigPlayerWrapper.find(`.player__play`);

  it(`has to be button element`, () => {
    BigPlayerWrapper.setProps({isPlaying: false});
    buttonElement.simulate(`click`);
    expect(BigPlayerWrapper.props().isPlaying).toEqual(false);
  });
});
