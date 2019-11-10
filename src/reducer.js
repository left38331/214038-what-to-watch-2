import {films} from './mocks/films';

const isFilmsThisGenre = (genre) => {
  if (genre === `All genres`) {
    return initialState.listCardFilms;
  }

  return initialState.listCardFilms.filter((film) => film.genre === genre);
};

const initialState = {
  genre: `All genres`,
  listCardFilms: films
};

export const ActionCreator = {
  changeGenreSelected: (genre) => ({
    type: `CHANGE_GENRE_SELECTED`,
    payload: genre
  }),

  changeFilmsList: (genre) => ({
    type: `CHANGE_FILMS_LIST`,
    payload: isFilmsThisGenre(genre)
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE_SELECTED`: return Object.assign({}, state, {
      genre: action.payload
    });
    case `CHANGE_FILMS_LIST`: return Object.assign({}, state, {
      listCardFilms: action.payload
    });
  }

  return state;
};
