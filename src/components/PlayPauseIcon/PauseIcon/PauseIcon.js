import React from 'react'
import PropTypes from 'prop-types'

import './PauseIcon.css'

export const PauseIcon = ({ reversed }) => (
  <svg className={reversed ? 'pause-icon pause-icon--reversed' : 'pause-icon'} viewBox='0 0 24 24'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z' />
  </svg>
)

PauseIcon.propTypes = {
  reversed: PropTypes.bool
}

export default PauseIcon
