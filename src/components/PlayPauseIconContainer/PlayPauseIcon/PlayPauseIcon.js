import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PlayIcon from './PlayIcon'
import PauseIcon from './PauseIcon'

class PlayPauseIcon extends Component {
    render() {
      const { isPlaying, cloudcastKey, reversed, cloudcastDetails } = this.props
      const previewAudio = cloudcastDetails[cloudcastKey] && cloudcastDetails[cloudcastKey].extraDetails && cloudcastDetails[cloudcastKey].extraDetails.previewUrl
      const audio = new Audio(previewAudio)

      console.log('audio.duration = ', audio.duration)

      return <div
        onMouseEnter={() => {
          if (!isPlaying) {
            audio.play()
          }
        }}
        onMouseLeave={() => {
          if (!isPlaying) {
            audio.pause()
          }
        }}
      >
        {isPlaying ? <PauseIcon reversed={reversed} /> : <PlayIcon reversed={reversed} />}
      </div>
    }
}

PlayPauseIcon.propTypes = {
  isPlaying: PropTypes.bool,
  reversed: PropTypes.bool
}

export default PlayPauseIcon
