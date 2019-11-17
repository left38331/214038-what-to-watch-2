const genresList = new Set([`All genres`]);
import {processedData} from './reducers/actions-async';

const getAllGenres = (films) => {
  films.forEach((film) => {
    genresList.add(film.genre);
  });

  return [...genresList];
};

const getFilmsByGenre = (genre) => {
  if (genre === `All genres`) {
    return processedData;
  }

  return processedData.filter((film) => film.genre === genre);
};

export {getAllGenres, getFilmsByGenre};
