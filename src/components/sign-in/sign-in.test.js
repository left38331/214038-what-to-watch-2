import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {SignIn} from 'components/sign-in/sign-in';

const props = {
  isAuthorizationRequired: false,
  formSubmitHandler: () => {},
  userInputHandler: () => {},
};

it(`Render correctly sign-in block component`, () => {
  const signIn = renderer.create(<BrowserRouter><SignIn {...props} /></BrowserRouter>).toJSON();

  expect(signIn).toMatchSnapshot();
});
