import React from 'react';

const withActiveTab = (Component) => {
  class WithActiveTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        label: `Overview`
      };

      this.clickTabHandler = this.clickTabHandler.bind(this);
    }

    clickTabHandler(data) {
      this.setState({
        label: data
      });
    }

    render() {
      return <Component
        {...this.props}
        clickTabHandler={this.clickTabHandler}
        label={this.state.label}
      />;
    }
  }

  WithActiveTab.propTypes = {};

  return WithActiveTab;
};

export default withActiveTab;
