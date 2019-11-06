import React from 'react';
import renderer from 'react-test-renderer';
import {PageContent} from 'components/page-content/page-content';
import {films} from '../../mocks/films';

it(`Render correctly page-content component`, () => {
  const pageContentComponent = renderer.create(<PageContent
    films={films}
  />).toJSON();

  expect(pageContentComponent).toMatchSnapshot();
});
