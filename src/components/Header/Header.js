import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.css'
import wave from './wave.gif'

export const Header = () => (
  <div className={styles.Header}>
    <div className={styles.HeaderInner}>
      <div className={styles.HeaderPlaceholder}>
        høme sessiønz
      </div>
      <Link to='/'>
        <img src={wave} className={styles.HeaderLogo} alt='høme sessiønz' />
      </Link>
      <div className={styles.HeaderMenu}>
        <Link to='/about'>abøut</Link>
        <Link to='/contact'>cøntact</Link>
      </div>
    </div>
  </div>
)

export default Header
