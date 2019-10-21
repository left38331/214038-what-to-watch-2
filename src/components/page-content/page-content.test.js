import React from 'react';
import renderer from 'react-test-renderer';
import {PageContent} from "./page-content";

it(`Render correctly page-content component`, () => {
  const pageContentComponent = renderer.create(<PageContent/>).toJSON();

  expect(pageContentComponent).toMatchSnapshot();
});
