import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {Logo} from 'components/logo/logo';
import {UserBlock} from 'components/user-block/user-block';

const FavoriteList = (props) => {
  return <div className="user-page">
    <header className="page-header user-page__head">
      <Logo/>

      <h1 className="page-title user-page__title">My list</h1>

      <UserBlock
        isAuthorizationRequired={props.isAuthorizationRequired}
        avatar={props.avatar}
      />
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        {props.favoriteFilms.map((film, i) => {
          return <article className="small-movie-card catalog__movies-card" key={i}>
            <div className="small-movie-card__image">
              <img src={film.backgroundImage} alt={film.title} width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link to={`/films/${film.id}`} className="small-movie-card__link">{film.title}</Link>
            </h3>
          </article>;
        })}

      </div>
    </section>

    <footer className="page-footer">
      <Logo
        isFooter={true}
      />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

FavoriteList.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  favoriteFilms: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.isAuthorizationRequired,
  avatar: state.avatarUrl,
  favoriteFilms: state.favoriteFilms
});

export {FavoriteList};
export default connect(mapStateToProps)(FavoriteList);
