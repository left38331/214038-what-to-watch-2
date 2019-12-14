import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import MovieCard from 'components/movie-card/movie-card';
import PageContent from 'components/page-content/page-content';
import {SignIn} from 'components/sign-in/sign-in';
import withUserSign from 'hocs/with-user-sign/with-user-sign';
import withActiveTab from 'hocs/with-active-tab/with-active-tab';
import withShowMore from 'hocs/with-show-more/with-show-more';
import withPlayerControl from 'hocs/with-player-control/with-player-control';
import withCommentAdd from 'hocs/with-comment-add/with-comment-add';
import withPrivate from 'hocs/with-private/with-private';
import {Operation} from '../../reducers/actions-async';
import MoviePageDetail from 'components/movie-page-detail/movie-page-detail';
import LargeVideoPlayer from 'components/large-video-player/large-video-player';
import {ActionCreator} from '../../reducers/actions-creator';
import AddCommentBlock from 'components/add-comment/add-comment';
import FavoriteList from 'components/favorite-list/favorite-list';

const WithUserSignWrapped = withUserSign(SignIn);
const WithActiveTabWrapped = withActiveTab(MoviePageDetail);
const WithShowMoreWrapped = withShowMore(PageContent);
const WithPlayerControlWrapped = withPlayerControl(LargeVideoPlayer);
const WithCommentAddWrapper = withPrivate(withCommentAdd(AddCommentBlock));
const WithFavoriteListWrapped = withPrivate(FavoriteList);

const App = (props) => {
  return (
    <Switch>
      <Route path='/' exact render = {(propsRouter) => {
        return (
          props.film ? <WithPlayerControlWrapped
            film={props.promo}
            setPlayingFilm={props.setPlayingFilm}
          /> : <React.Fragment>
            <MovieCard
              {...propsRouter}
            />
            <WithShowMoreWrapped/>
          </React.Fragment>
        );
      }}/>
      <Route path='/login' exact render = {(propsRouter) => {
        return (
          <WithUserSignWrapped
            {...propsRouter}
            onSubmit={props.requireAuthorization}
            isAuthorizationRequired={props.isAuthorizationRequired}
          />
        );
      }}/>
      <Route exact path='/films/:id' render = {(propsRouter) => {
        props.getComments(propsRouter.match.params.id);
        props.resetPostCommentStatus();
        props.setCurrentFilm(props.listCardFilms[propsRouter.match.params.id - 1]);
        return (
          props.film ? <WithPlayerControlWrapped
            film={props.film}
            setPlayingFilm={props.setPlayingFilm}
          /> : <WithActiveTabWrapped {...propsRouter} />
        );
      }}/>
      <Route exact path='/films/:id/review' render = {(propsRouter) => <WithCommentAddWrapper {...propsRouter} />}/>
      <Route exact path='/mylist' render = {(propsRouter) => {
        props.getFavoriteFilms();
        return <WithFavoriteListWrapped {...propsRouter} />;
      }}/>
    </Switch>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  promo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
      videoLink: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      runTime: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      isFavorite: PropTypes.bool.isRequired,
    }),
  ]).isRequired,
  listCardFilms: PropTypes.array.isRequired,
  setPlayingFilm: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  resetPostCommentStatus: PropTypes.func.isRequired,
  setCurrentFilm: PropTypes.func.isRequired,
  getFavoriteFilms: PropTypes.func.isRequired,
  film: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.isAuthorizationRequired,
  avatarUrl: state.avatarUrl,
  film: state.film,
  listCardFilms: state.listCardFilms,
  promo: state.promo,
});

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: (userData) => {
    dispatch(Operation.postUserLogin(userData));
  },
  setPlayingFilm: () => {
    dispatch(ActionCreator.setPlayingFilm(``));
  },
  getComments: (userData) => {
    dispatch(Operation.getComments(userData));
  },
  resetPostCommentStatus: () => {
    dispatch(ActionCreator.successPostComment(false));
  },
  setCurrentFilm: (film) => {
    dispatch(ActionCreator.setCurrentFilm(film));
  },
  getFavoriteFilms: () => {
    dispatch(Operation.getFavoriteFilms());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
