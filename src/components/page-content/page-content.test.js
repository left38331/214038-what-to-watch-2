import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {PageContent} from 'components/page-content/page-content';
import {films} from '../../mocks/films';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {
      createRef() {}
    };
  }
  return null;
}

it(`Render correctly page-content component`, () => {
  const options = {createNodeMock};
  const store = createStore(() => ({
    genre: `All genres`,
    listCardFilms: films,
    genresList: [`drama`, `action`, `fantasy`],
  }));
  const props = {
    activeFilms: films,
    isShowAll: `all`,
    showAllFilms: () => {}
  };
  const pageContentComponent = renderer.create(<Provider store={store}>
    <BrowserRouter><PageContent {...props}/></BrowserRouter>
  </Provider>, options).toJSON();

  expect(pageContentComponent).toMatchSnapshot();
});
