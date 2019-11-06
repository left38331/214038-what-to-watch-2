import React from 'react';
import renderer from 'react-test-renderer';
import {VideoPlayer} from 'components/video-player/video-player';
import {films} from '../../mocks/films';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {
      createRef() {}
    };
  }
  return null;
}

it(`Render correctly video=player component`, () => {
  const options = {createNodeMock};
  const props = {
    isPlaying: false,
    clickTitle: () => {},
    hoverCardHandler: () => {},
    preview: films[0].preview,
    poster: films[0].poster,
    muted: true
  };
  const videoPlayerComponent = renderer.create(<VideoPlayer {...props} />, options).toJSON();

  expect(videoPlayerComponent).toMatchSnapshot();
});
