import React from 'react';

const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        films: `first`
      };

      this.showAllFilms = this.showAllFilms.bind(this);
    }

    showAllFilms() {
      this.setState({
        films: `all`
      });
    }

    render() {
      return <Component
        {...this.props}
        showAllFilms={this.showAllFilms}
        isShowAll={this.state.films}
      />;
    }
  }

  WithShowMore.propTypes = {};

  return WithShowMore;
};

export default withShowMore;
