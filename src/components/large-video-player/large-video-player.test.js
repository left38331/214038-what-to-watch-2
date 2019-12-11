import React from 'react';
import renderer from 'react-test-renderer';

import {LargeVideoPlayer} from 'components/large-video-player/large-video-player';
import {films} from '../../mocks/films';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {
      createRef() {}
    };
  }
  return null;
}
const options = {createNodeMock};
const props = {
  isPlaying: true,
  onTimeTick: () => {},
  setStatusPlayer: () => {},
  setPlayingFilm: () => {},
  film: films[0],
  time: 100,
};

it(`Render correctly large video player component`, () => {
  const tree = renderer.create(<LargeVideoPlayer {...props} />, options).toJSON();

  expect(tree).toMatchSnapshot();
});
