const initialState = {
  genre: `All genres`,
  listCardFilms: [],
  activeFilms: [],
  genresList: [],
  isAuthorizationRequired: true,
  avatarUrl: ``,
  email: ``,
  id: ``,
  name: ``
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
      listCardFilms: action.payload
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
  }

  return state;
};
