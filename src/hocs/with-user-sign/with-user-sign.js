import React from 'react';
import PropTypes from 'prop-types';

const withUserSign = (Component) => {
  class WithUserSign extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleUserInput = this._handleUserInput.bind(this);
      this._formSubmitHandler = this._formSubmitHandler.bind(this);
    }

    _handleUserInput(evt) {
      const name = evt.target.name;
      const value = evt.target.value;

      this.setState({
        [name]: value
      });
    }

    _formSubmitHandler(evt) {
      evt.preventDefault();
      this.props.onSubmit({
        email: this.state.email,
        password: this.state.password
      });
    }

    render() {
      return <Component
        {...this.props}
        userInputHandler={this._handleUserInput}
        formSubmitHandler={this._formSubmitHandler}
      />;
    }
  }

  WithUserSign.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  return WithUserSign;
};

export default withUserSign;
