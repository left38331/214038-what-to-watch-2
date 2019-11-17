export default class ModelMovie {
  constructor(data) {
    this.id = data[`id`];
    this.title = data[`name`];
    this.poster = data[`poster_image`];
    this.preview = data[`preview_video_link`];
    this.genre = data[`genre`];
  }

  static parseMovie(data) {
    return new ModelMovie(data);
  }

  static parseMovies(data) {
    return data.map(ModelMovie.parseMovie);
  }
}
