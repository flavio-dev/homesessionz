import React from 'react'
import PropTypes from 'prop-types'

import './Video.css'

export const Video = ({ smallVid, mediumVid, largeVid }) => (
  <div className='VideoWrapper'>
    <video autoPlay muted loop className='VideoSmall'>
      <source src={smallVid} type='video/mp4' />
    </video>
    <video autoPlay muted loop className='VideoMedium'>
      <source src={mediumVid} type='video/mp4' />
    </video>
    <video autoPlay muted loop className='VideoLarge'>
      <source src={largeVid} type='video/mp4' />
    </video>
  </div>
)

Video.propTypes = {
  smallVid: PropTypes.string,
  mediumVid: PropTypes.string,
  largeVid: PropTypes.string
}

export default Video
