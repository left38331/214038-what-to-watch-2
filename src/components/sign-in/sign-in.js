import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {Logo} from 'components/logo/logo';

const SignIn = (props) => {
  return props.isAuthorizationRequired ? <div className="user-page">
    <header className="page-header user-page__head">
      <Logo/>

      <h1 className="page-title user-page__title">Sign in</h1>
    </header>

    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={props.formSubmitHandler}>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email" onChange={props.userInputHandler}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password" onChange={props.userInputHandler}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>

    <footer className="page-footer">
      <Logo
        isFooter={true}
      />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div> : <Redirect to="/"></Redirect>;
};

SignIn.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
  userInputHandler: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export {SignIn};
