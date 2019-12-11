import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducers/actions-creator';

class LargeVideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.timerInterval = null;
    this._tick = this._tick.bind(this);
    this._videoRef = React.createRef();
  }

  componentDidMount() {
    this.timerInterval = setInterval(this._tick, 1000);
  }

  componentDidUpdate(prevProps) {
    const video = this._videoRef.current;

    if (prevProps.isPlaying !== this.props.isPlaying) {
      if (this.props.isPlaying) {
        video.pause();
        clearInterval(this.timerInterval);
      } else {
        video.play();
        this.timerInterval = setInterval(this._tick, 1000);
      }
    }
  }

  _tick() {
    this.props.onTimeTick();
    this.setProgressBar();
  }

  getTime() {
    const {time} = this.props;
    let hour = Math.floor(time / 3600);
    hour = hour < 1 ? `` : hour;
    let min = Math.floor(time / 60);
    min = min < 1 ? `` : min;
    let sec = time - min * 60;
    sec = (sec < 10) ? `0${sec}` : sec;

    if (hour >= 1) {
      hour = `${hour}:`;
    }

    if (min >= 1) {
      min = `${min}:`;
    }

    return `${hour}${min}${sec}`;
  }

  setProgressBar() {
    return 100 - Math.floor(this.props.time * 100 / this.props.film.runTime);
  }

  render() {
    return <div className="player">
      <video ref={this._videoRef} src={this.props.film.fullVideo} className="player__video" autoPlay="autoplay"></video>

      <button type="button" className="player__exit" onClick={()=>{
        this.props.setPlayingFilm();
        clearInterval(this.timerInterval);
      }}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={this.setProgressBar()} max="100"></progress>
            <div className="player__toggler" style={{left: `${this.setProgressBar()}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{this.getTime()}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" style={{background: `red`}} onClick={()=>this.props.setStatusPlayer()}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{this.props.film.title}</div>

          <button type="button" className="player__full-screen" onClick={()=>this._videoRef.current.requestFullscreen()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>;
  }
}

LargeVideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onTimeTick: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  setStatusPlayer: PropTypes.func.isRequired,
  setPlayingFilm: PropTypes.func.isRequired,
  film: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      runTime: PropTypes.number.isRequired,
    }),
  ]).isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  time: state.time
});

const mapDispatchToProps = (dispatch) => ({
  onTimeTick: (time) => dispatch(ActionCreator.decrementTime(time))
});

export {LargeVideoPlayer};
export default connect(mapStateToProps, mapDispatchToProps)(LargeVideoPlayer);
