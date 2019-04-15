import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import CircularProgressbar from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import PlayIcon from './PlayIcon'
import PauseIcon from './PauseIcon'

class PlayPauseIcon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      audio: null,
      percentage: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.audio &&
      props.cloudcastDetails[props.cloudcastKey] &&
      props.cloudcastDetails[props.cloudcastKey].extraDetails
      && props.cloudcastDetails[props.cloudcastKey].extraDetails.previewUrl) {
      return { audio: new Audio(props.cloudcastDetails[props.cloudcastKey].extraDetails.previewUrl) }
    }
  }

  render() {
    const { isPlaying, reversed } = this.props
    let percentage = this.state.audio ? (this.state.audio.currentTime * 100) / this.state.audio.duration : 0
    return (
      <Fragment>
        <CircularProgressbar percentage={percentage} />
        <div
          onMouseEnter={() => {
            // console.log('audio.currentTime = ', audio.currentTime)
            // console.log('audio.duration = ', audio.duration)
            this.state.audio.play()
          }}
          onMouseLeave={() => {
            this.state.audio.pause()
          }}
        >
          {isPlaying ? <PauseIcon reversed={reversed} /> : <PlayIcon reversed={reversed} />}
        </div>
      </Fragment>
    )
  }
}

PlayPauseIcon.propTypes = {
  isPlaying: PropTypes.bool,
  reversed: PropTypes.bool
}

export default PlayPauseIcon
