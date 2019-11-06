import React from 'react';
import {mount} from 'enzyme';
import {VideoPlayer} from 'components/video-player/video-player';
import {films} from '../../mocks/films';

describe(`Testing Video Player`, () => {
  window.HTMLMediaElement.prototype.load = () => {};

  const clickHandler = jest.fn();
  const props = {
    isPlaying: false,
    clickTitle: clickHandler,
    hoverCardHandler: clickHandler,
    preview: films[0].preview,
    poster: films[0].poster,
    muted: true
  };
  const videoPlayerComponent = mount(<VideoPlayer {...props}/>);

  it(`Video is going`, () => {
    videoPlayerComponent.setState({isPlaying: true});
    expect(videoPlayerComponent.state().isPlaying).toEqual(true);
  });

  it(`Video is stopped`, () => {
    videoPlayerComponent.setState({isPlaying: false});
    expect(videoPlayerComponent.state().isPlaying).toEqual(false);
  });
});
