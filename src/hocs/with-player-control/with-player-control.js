import React from 'react';

const withPlayerControl = (Component) => {
  class WithPlayerControl extends React.PureComponent {
    constructor(props) {
      super(props);

      this.setStatusPlayer = this.setStatusPlayer.bind(this);
      this.state = {
        isPlaying: false
      };
    }

    setStatusPlayer() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying
      }));
    }

    render() {
      return <Component
        {...this.props}
        isPlaying={this.state.isPlaying}
        setStatusPlayer={this.setStatusPlayer}
      />;
    }
  }

  WithPlayerControl.propTypes = {};

  return WithPlayerControl;
};

export default withPlayerControl;
