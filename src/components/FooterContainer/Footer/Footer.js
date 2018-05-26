import React from 'react'
import PropTypes from 'prop-types'

import styles from './Footer.css'

export const Footer = ({currentCloudcast}) => (
  <div className={styles.Footer}>
    {currentCloudcast}
  </div>
)

Footer.propTypes = {
  currentCloudcast: PropTypes.string
}

export default Footer
