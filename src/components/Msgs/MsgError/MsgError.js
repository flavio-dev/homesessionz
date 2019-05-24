import React from 'react'
import PropTypes from 'prop-types'

import CrossIcon from 'components/CrossIcon'

import '../Msgs.css'

export const MsgError = ({ text }) => (
  <div className='msg'>
    <CrossIcon inMsg />
    <div className='msg__texts'>
      <div className='msg__text--bold msg--top'>oops!</div>
      <div>{text}</div>
    </div>
  </div>
)

MsgError.propTypes = {
  text: PropTypes.string
}

export default MsgError
