import React from 'react'
import PropTypes from 'prop-types'

import styles from './Video.css'

export const Video = ({ smallVid, mediumVid, largeVid }) => (
  <div className={styles.VideoWrapper}>
    <video autoPlay muted loop className={styles.VideoSmall}>
      <source src={smallVid} type='video/mp4' />
    </video>
    <video autoPlay muted loop className={styles.VideoMedium}>
      <source src={mediumVid} type='video/mp4' />
    </video>
    <video autoPlay muted loop className={styles.VideoLarge}>
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
