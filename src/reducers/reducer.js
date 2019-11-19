const initialState = {
  genre: `All genres`,
  listCardFilms: [],
  activeFilms: [],
  genresList: []
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
  }

  return state;
};
