import React from 'react';
import renderer from 'react-test-renderer';
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
  const props = {
    genresList: [`Comedies`, `Drama`],
    activeGenre: `Drama`,
    onChangeGenre: ()=>{},
    films
  };
  const pageContentComponent = renderer.create(<PageContent {...props}/>, options).toJSON();

  expect(pageContentComponent).toMatchSnapshot();
});
