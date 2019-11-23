import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {MovieCard} from 'components/movie-card/movie-card';
import {PageContent} from 'components/page-content/page-content';
import {SignIn} from 'components/sign-in/sign-in';
import withUserSign from 'hocs/with-user-sign/with-user-sign';
import {Operation} from '../../reducers/actions-async';

const WithUserSignWrapped = withUserSign(SignIn);

export class App extends React.PureComponent {
  defineScreen() {
    if (!this.props.isAuthorizationRequired) {
      return <React.Fragment>
        <MovieCard
          isAuthorizationRequired={this.props.isAuthorizationRequired}
          avatar={this.props.avatarUrl}
        />
        <PageContent/>
      </React.Fragment>;
    }

    return <WithUserSignWrapped
      onSubmit={this.props.requireAuthorization}
    />;
  }

  render() {
    return this.defineScreen();
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.isAuthorizationRequired,
  avatarUrl: state.avatarUrl
});

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: (userData) => {
    dispatch(Operation.postUserLogin(userData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

