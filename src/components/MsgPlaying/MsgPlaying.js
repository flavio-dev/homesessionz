import React from 'react'
import PropTypes from 'prop-types'

import './MsgPlaying.css'

export const MsgPlaying = ({ name }) => (
  <div>
    <div>you are listening to:</div>
    <div className='msg'>{name}</div>
  </div>
)

MsgPlaying.propTypes = {
  name: PropTypes.string
}

export default MsgPlaying
