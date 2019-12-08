const initialState = {
  genre: `All genres`,
  listCardFilms: [],
  promo: {},
  activeFilms: [],
  genresList: [],
  isAuthorizationRequired: false,
  avatarUrl: ``,
  email: ``,
  id: ``,
  name: ``,
  film: ``,
  time: ``,
  comments: [],
  isPostComment: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE_SELECTED`: return Object.assign({}, state, {
      genre: action.payload
    });
    case `CHANGE_FILMS_LIST`: return Object.assign({}, state, {
      activeFilms: action.payload
    });
    case `LOAD_FILMS`: return Object.assign({}, state, {
      listCardFilms: action.payload.films,
      promo: action.payload.promo
    });
    case `GET_GENRE`: return Object.assign({}, state, {
      genresList: action.payload
    });
    case `REQUIRE_AUTHORIZATION`: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case `SING_IN_USER`: return Object.assign({}, state, {
      email: action.payload.email,
      id: action.payload.id,
      avatarUrl: action.payload.avatar_url,
      name: action.payload.name,
    });
    case `SET_PLAYING_FILM`: return Object.assign({}, state, {
      film: action.payload
    });
    case `SET_TIME`: return Object.assign({}, state, {
      time: action.payload
    });
    case `DECREMENT_TIME`: return Object.assign({}, state, {
      time: state.time - action.payload
    });
    case `GET_COMMENTS`: return Object.assign({}, state, {
      comments: action.payload
    });
    case `SUCCESS_POST_COMMENT`: return Object.assign({}, state, {
      isPostComment: action.payload
    });
  }

  return state;
};
