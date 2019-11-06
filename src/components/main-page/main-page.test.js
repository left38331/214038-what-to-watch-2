import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from 'components/main-page/main-page';
import {films} from '../../mocks/films';

it(`Render correctly main-page component`, () => {
  const mainPageComponent = renderer.create(<MainPage
    films={films}
  />).toJSON();

  expect(mainPageComponent).toMatchSnapshot();
});
