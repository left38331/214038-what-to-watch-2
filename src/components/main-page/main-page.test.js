import React from 'react';
import renderer from 'react-test-renderer';
import {ManePage} from "components/main-page/mane-page";
import {films} from "../../mocks/films";

it(`Render correctly main-page component`, () => {
  const mainPageComponent = renderer.create(<ManePage
    films={films}
  />).toJSON();

  expect(mainPageComponent).toMatchSnapshot();
});
