import React from 'react'
import PropTypes from 'prop-types'

import '../Msgs.css'

export const MsgPlaying = ({ name }) => (
  <div>
    <div>you are listening to:</div>
    <div className='msg msg--bottom'>{name}</div>
  </div>
)

MsgPlaying.propTypes = {
  name: PropTypes.string
}

export default MsgPlaying
