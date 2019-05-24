import React from 'react'
import PropTypes from 'prop-types'

import VinylIcon from 'components/VinylIcon'

import '../Msgs.css'

export const MsgPlaying = ({ name }) => (
  <div className='msg'>
    <VinylIcon inMsg />
    <div className='msg__texts'>
      <div>you are listening to:</div>
      <div className='msg__text--bold msg__text--bottom'>{name}</div>
    </div>
  </div>
)

MsgPlaying.propTypes = {
  name: PropTypes.string
}

export default MsgPlaying
