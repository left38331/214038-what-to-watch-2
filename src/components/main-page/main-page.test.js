import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from 'components/main-page/main-page';
import {films} from '../../mocks/films';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {
      createRef() {}
    };
  }
  return null;
}

it(`Render correctly main-page component`, () => {
  const options = {createNodeMock};
  const mainPageComponent = renderer.create(<MainPage
    films={films}
  />, options).toJSON();

  expect(mainPageComponent).toMatchSnapshot();
});
