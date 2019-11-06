import React from 'react';
import PropTypes from 'prop-types';
import {CardFilm} from 'components/card-film/card-film';

export class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.hoverCardHandler = this.hoverCardHandler.bind(this);

    this.state = {
      activeFilmId: null
    };
  }

  hoverCardHandler(movieData) {
    this.setState({
      activeFilmId: movieData.id
    });
  }

  render() {
    return <div className="catalog__movies-list">
      {this.props.films.map((item) => <CardFilm key={item.id} film={item} clickTitle={this.props.clickTitle} hoverCardHandler={this.hoverCardHandler}/>)}
    </div>;
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
  clickTitle: PropTypes.func.isRequired
};