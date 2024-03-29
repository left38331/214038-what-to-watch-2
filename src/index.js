import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {BrowserRouter} from 'react-router-dom';

import App from 'components/app/app';
import {reducer} from './reducers/reducer';
import {Operation} from './reducers/actions-async';
import createAPI from './api';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.loadFilms());
  store.dispatch(Operation.loadPromo());

  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
