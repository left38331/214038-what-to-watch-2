const genresList = new Set([`All genres`]);

const getAllGenres = (films) => {
  films.forEach((film) => {
    genresList.add(film.genre);
  });

  return [...genresList];
};

const getFilmsByGenre = (genre, getState) => {
  if (genre === `All genres`) {
    return getState().listCardFilms;
  }

  return getState().listCardFilms.filter((film) => film.genre === genre);
};

export {getAllGenres, getFilmsByGenre};
