import {films} from './mocks/films';

const genresList = new Set([`All genres`]);

films.forEach((film) => {
  genresList.add(film.genre);
});

export {genresList};
