import React from 'react'
import PropTypes from 'prop-types'

import styles from './CloudcastPlayer.css'

export const CloudcastPlayer = ({currentCloudcast}) => (
  <div className={styles.CloudcastPlayer}
    dangerouslySetInnerHTML={{__html: currentCloudcast}}
  />
)

CloudcastPlayer.propTypes = {
  currentCloudcast: PropTypes.string
}

export default CloudcastPlayer
