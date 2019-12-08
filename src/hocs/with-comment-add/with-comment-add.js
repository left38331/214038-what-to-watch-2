import React from 'react';

const withCommentAdd = (Component) => {
  class WithCommentAdd extends React.PureComponent {
    constructor(props) {
      super(props);

      this.unDisableBtn = this.unDisableBtn.bind(this);
      this.state = {
        isDisable: true
      };
    }

    unDisableBtn(val) {
      this.setState({
        isDisable: val
      });
    }

    render() {
      return <Component
        {...this.props}
        isDisable={this.state.isDisable}
        unDisableBtn={this.unDisableBtn}
      />;
    }
  }

  WithCommentAdd.propTypes = {};

  return WithCommentAdd;
};

export default withCommentAdd;
