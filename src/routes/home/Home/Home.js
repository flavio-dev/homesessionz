import React, { Component } from 'react'
import logo from './logo.svg'
import styles from './Home.css'

class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        <header className={styles.HomeHeader}>
          <img src={logo} className={styles.HomeLogo} alt='logo' />
          <h1 className={styles.HomeTitle}>Welcome to React</h1>
        </header>
        <p className={styles.HomeIntro}>
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Home
