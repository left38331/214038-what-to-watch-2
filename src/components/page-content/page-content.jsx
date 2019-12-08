import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import GenreList from 'components/genre-list/genre-list';
import {MoviesList} from 'components/movies-list/movies-list';
import withActiveItem from 'hocs/with-active-item/with-active-item';
import {ShowMore} from 'components/show-more/show-more';

const MoviesListWrapped = withActiveItem(MoviesList);

const PageContent = (props) => {
  let films;

  if (props.activeFilms.length === 0) {
    films = props.listCardFilms;
  } else {
    films = props.activeFilms;
  }

  let firstFilms = films.slice(0, 8);
  let showBntMore = false;

  if (films.length > firstFilms.length) {
    showBntMore = true;
  }

  if (props.isShowAll === `all`) {
    firstFilms = films.slice();
    showBntMore = false;
  }

  return <div className="page-content">
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList/>

      <MoviesListWrapped
        listCardFilms={firstFilms}
      />

      <ShowMore
        shouldShowMore={showBntMore}
        onShowMoreBtnClick = {props.showAllFilms}
      />
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

PageContent.propTypes = {
  listCardFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  activeFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  isShowAll: PropTypes.string.isRequired,
  showAllFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  listCardFilms: state.listCardFilms,
  activeFilms: state.activeFilms
});

export default connect(mapStateToProps)(PageContent);
