import React from 'react'
import PropTypes from 'prop-types'

import './PlayIcon.css'

export const PlayIcon = ({ reversed }) => (
  <svg className={reversed ? 'play-icon play-icon--reversed' : 'play-icon'} viewBox='0 0 510 510'>
    <path d='M204 369.75L357 255 204 140.25v229.5zM255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204z' />
  </svg>
)

PlayIcon.propTypes = {
  reversed: PropTypes.bool
}

export default PlayIcon
