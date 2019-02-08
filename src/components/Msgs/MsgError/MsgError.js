import React from 'react'
import PropTypes from 'prop-types'

import '../Msgs.css'

export const MsgError = ({ text }) => (
  <div>
    <div className='msg msg--top'>oops!</div>
    <div>{text}</div>
  </div>
)

MsgError.propTypes = {
  text: PropTypes.string
}

export default MsgError
