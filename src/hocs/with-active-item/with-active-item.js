import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.hoverCardHandler = this.hoverCardHandler.bind(this);
      this.leaveCardHandler = this.leaveCardHandler.bind(this);
      this.timer = null;
      this.state = {
        activeFilmId: -1
      };
    }

    hoverCardHandler(movieData) {
      this.timer = setTimeout(() => {
        this.setState({
          activeFilmId: movieData.id
        });
      }, 1000);
    }

    leaveCardHandler() {
      this.setState({
        activeFilmId: -1
      });

      if (this.timer) {
        clearTimeout(this.timer);
      }
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    render() {
      return <Component
        {...this.props}
        isPlaying={this.state.activeFilmId}
        hoverCardHandler={this.hoverCardHandler}
        leaveCardHandler={this.leaveCardHandler}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
