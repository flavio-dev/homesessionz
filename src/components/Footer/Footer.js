import React from 'react'

import styles from './Footer.css'

import InstaIcon from 'components/InstaIcon'

export const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.FooterInner}>
      <div className={styles.FooterSocial}>
        <div>made with love by <a href='https://github.com/flavio-dev'>flaviø</a></div>
        <InstaIcon />
      </div>
      <div className={styles.FooterCopyrights}>copyrights 2018</div>
    </div>
  </div>
)

export default Footer
