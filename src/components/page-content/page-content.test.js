import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

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
    activeFilms: []
  }));
  const props = {
    films
  };
  const pageContentComponent = renderer.create(<Provider store={store}>
    <PageContent {...props}/>
  </Provider>, options).toJSON();

  expect(pageContentComponent).toMatchSnapshot();
});
