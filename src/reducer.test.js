import {ActionCreator} from "./reducer";
import {reducer} from "./reducer";
import {films} from "./mocks/films";

describe(`Action creators works correctly`, () => {
  it(`Action creator for change genre`, () => {
    expect(ActionCreator.changeGenreSelected(`Drama`)).toEqual({
      type: `CHANGE_GENRE_SELECTED`,
      payload: `Drama`
    });
  });

  it(`Action creator for change films list when genre was changed`, () => {
    expect(ActionCreator.changeFilmsList(`Fantasy`)).toEqual({
      type: `CHANGE_FILMS_LIST`,
      payload: [films[0]]
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      listCardFilms: films
    });
  });
});
