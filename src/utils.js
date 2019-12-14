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

const processRatingToWord = (rating) => {
  let ratingInWord;

  switch (true) {
    case rating <= 3:
      ratingInWord = `bad`;
      break;
    case rating > 3 && rating <= 5:
      ratingInWord = `normal`;
      break;
    case rating > 5 && rating <= 8:
      ratingInWord = `good`;
      break;
    case rating > 8 && rating < 10:
      ratingInWord = `very good`;
      break;
    case (rating === 10):
      ratingInWord = `awesome`;
      break;
  }

  return ratingInWord;
};

export {getAllGenres, getFilmsByGenre, processRatingToWord};
