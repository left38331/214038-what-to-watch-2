import React from 'react';
import PropTypes from 'prop-types';

import {CardFilm} from 'components/card-film/card-film';

export class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.hoverCardHandler = this.hoverCardHandler.bind(this);
    this.leaveCardHandler = this.leaveCardHandler.bind(this);
    this.timer = null;
    this.state = {
      activeFilmId: null
    };
  }

  hoverCardHandler(movieData) {
    this.timer = setTimeout(()=>{
      this.setState({
        activeFilmId: movieData.id
      });
    }, 1000);
  }

  leaveCardHandler() {
    this.setState({
      activeFilmId: null
    });

    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return <div className="catalog__movies-list">
      {this.props.films.map((item) => <CardFilm key={item.id} film={item} clickTitle={this.props.clickTitle} hoverCardHandler={this.hoverCardHandler} isPlaying={this.state.activeFilmId === item[`id`]} leaveCardHandler={this.leaveCardHandler}/>)}
    </div>;
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
  clickTitle: PropTypes.func.isRequired
};
