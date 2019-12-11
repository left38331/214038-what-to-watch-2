export default class ModelMovie {
  constructor(data) {
    this.id = data[`id`];
    this.title = data[`name`];
    this.poster = data[`poster_image`];
    this.preview = data[`preview_video_link`];
    this.fullVideo = data[`video_link`];
    this.genre = data[`genre`];
    this.released = data[`released`];
    this.runTime = data[`run_time`];
    this.rating = data[`rating`];
    this.scoresCount = data[`scores_count`];
    this.backgroundColor = data[`background_color`];
    this.backgroundImage = data[`background_image`];
    this.description = data[`description`];
    this.director = data[`director`];
    this.starring = data[`starring`];
    this.isFavorite = data[`is_favorite`];
  }

  static parseMovie(data) {
    return new ModelMovie(data);
  }

  static parseMovies(data) {
    return data.map(ModelMovie.parseMovie);
  }
}
