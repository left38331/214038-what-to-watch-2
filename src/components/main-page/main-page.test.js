import React from 'react';
import renderer from 'react-test-renderer';
import {ManePage} from "components/main-page/mane-page";

it(`Render correctly main-page component`, () => {
  const mainPageComponent = renderer.create(<ManePage/>).toJSON();

  expect(mainPageComponent).toMatchSnapshot();
});
