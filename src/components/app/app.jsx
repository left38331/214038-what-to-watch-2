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
import {Operation} from '../../reducers/actions-async';
import MoviePageDetail from 'components/tabs-movie-details/tabs-movie-details';
import LargeVideoPlayer from 'components/large-video-player/large-video-player';
import {ActionCreator} from '../../reducers/actions-creator';
import AddCommentBlock from 'components/add-comment/add-comment';

const WithUserSignWrapped = withUserSign(SignIn);
const WithActiveTabWrapped = withActiveTab(MoviePageDetail);
const WithShowMoreWrapped = withShowMore(PageContent);
const WithPlayerControlWrapped = withPlayerControl(LargeVideoPlayer);
const WithCommentAddWrapper = withCommentAdd(AddCommentBlock);

export class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path='/' exact render = {(props) => {
          return (
            this.props.film ? <WithPlayerControlWrapped
              film={this.props.promo}
              setPlayingFilm={this.props.setPlayingFilm}
            /> : <React.Fragment>
              <MovieCard
                {...props}
                promo={this.props.promo}
                isAuthorizationRequired={this.props.isAuthorizationRequired}
                avatar={this.props.avatarUrl}
              />
              <WithShowMoreWrapped/>
            </React.Fragment>
          );
        }}/>
        <Route path='/login' exact render = {(props) => {
          return (
            <WithUserSignWrapped
              {...props}
              onSubmit={this.props.requireAuthorization}
              isAuthorizationRequired={this.props.isAuthorizationRequired}
            />
          );
        }}/>
        <Route exact path='/films/:id' render = {(props) => {
          this.props.getComments(props.match.params.id);
          this.props.resetPostCommentStatus();
          return (
            this.props.film ? <WithPlayerControlWrapped
              film={this.props.film}
              setPlayingFilm={this.props.setPlayingFilm}
            /> : <WithActiveTabWrapped
              {...props}
              currentFilm={this.props.listCardFilms[props.match.params.id - 1]}
              isAuthorizationRequired={this.props.isAuthorizationRequired}
              avatar={this.props.avatarUrl}
            />
          );
        }}/>
        <Route exact path='/films/:id/review' render = {(props) => {
          return (
            <WithCommentAddWrapper
              {...props}
              currentFilm={this.props.listCardFilms[props.match.params.id - 1]}
              isAuthorizationRequired={this.props.isAuthorizationRequired}
              avatar={this.props.avatarUrl}
              successComment={this.props.isPostComment}
            />
          );
        }}/>
      </Switch>
    );
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.isAuthorizationRequired,
  avatarUrl: state.avatarUrl,
  film: state.film,
  listCardFilms: state.listCardFilms,
  promo: state.promo,
  isPostComment: state.isPostComment
});

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: (userData) => {
    dispatch(Operation.postUserLogin(userData));
  },
  setPlayingFilm: () => {
    dispatch(ActionCreator.setPlayingFilm(false));
  },
  getComments: (userData) => {
    dispatch(Operation.getComments(userData));
  },
  resetPostCommentStatus: () => {
    dispatch(ActionCreator.successPostComment(false));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

