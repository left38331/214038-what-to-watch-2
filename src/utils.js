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
    case rating <= 2:
      ratingInWord = `bad`;
      break;
    case rating > 2 && rating <= 4:
      ratingInWord = `normal`;
      break;
    case rating > 4 && rating <= 6:
      ratingInWord = `good`;
      break;
    case rating > 6 && rating <= 8:
      ratingInWord = `very good`;
      break;
    case (rating > 8):
      ratingInWord = `awesome`;
      break;
  }

  return ratingInWord;
};

const selectRandomItem = (arr) => {
  return arr[Math.floor(0 + Math.random() * (arr.length + 1))];
};

export {getAllGenres, getFilmsByGenre, processRatingToWord, selectRandomItem};
