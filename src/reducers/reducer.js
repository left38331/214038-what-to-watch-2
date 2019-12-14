import {ActionType} from './actions-creator';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_SELECTED: return Object.assign({}, state, {
      genre: action.payload
    });
    case ActionType.CHANGE_FILMS_LIST: return Object.assign({}, state, {
      activeFilms: action.payload
    });
    case ActionType.LOAD_FILMS: return Object.assign({}, state, {
      listCardFilms: action.payload
    });
    case ActionType.LOAD_PROMO: return Object.assign({}, state, {
      promo: action.payload
    });
    case ActionType.GET_GENRE: return Object.assign({}, state, {
      genresList: action.payload
    });
    case ActionType.REQUIRE_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case ActionType.SING_IN_USER: return Object.assign({}, state, {
      email: action.payload.email,
      id: action.payload.id,
      avatarUrl: action.payload.avatar_url,
      name: action.payload.name,
    });
    case ActionType.SET_PLAYING_FILM: return Object.assign({}, state, {
      film: action.payload
    });
    case ActionType.SET_TIME: return Object.assign({}, state, {
      time: action.payload
    });
    case ActionType.DECREMENT_TIME: return Object.assign({}, state, {
      time: state.time - action.payload
    });
    case ActionType.GET_COMMENTS: return Object.assign({}, state, {
      comments: action.payload
    });
    case ActionType.SUCCESS_POST_COMMENT: return Object.assign({}, state, {
      isPostComment: action.payload
    });
    case ActionType.SET_CURRENT_FILM: return Object.assign({}, state, {
      currentFilm: action.payload
    });
    case ActionType.GET_FAVORITE_FILMS: return Object.assign({}, state, {
      favoriteFilms: action.payload
    });
  }

  return state;
};

export {reducer};
