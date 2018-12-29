import React from 'react'
import PropTypes from 'prop-types'

import PlayIcon from './PlayIcon'
import PauseIcon from './PauseIcon'

export const PlayPauseIcon = ({ isPlaying, reversed }) => (
  isPlaying ? <PauseIcon reversed={reversed} /> : <PlayIcon reversed={reversed} />
)

PlayPauseIcon.propTypes = {
  isPlaying: PropTypes.bool,
  reversed: PropTypes.bool
}

export default PlayPauseIcon
