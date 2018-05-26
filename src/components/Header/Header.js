import React from 'react'

import styles from './Header.css'
import logo from './logo.svg'

export const Header = () => (
  <div className={styles.Header}>
    <img src={logo} className={styles.HeaderLogo} alt='logo' />
  </div>
)

export default Header
