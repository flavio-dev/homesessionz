import React, { Component } from 'react'
import styles from './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listCloudcastKeys: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps props = ', props)
    console.log('getDerivedStateFromProps state = ', state)
    let newState = Object.assign({}, this.state)
    if (props.listCloudcastKeys.length > state.listCloudcastKeys.length) {
      newState.listCloudcastKeys = props.listCloudcastKeys
    }

    return newState
  }

  render() {
    return (
      <div className={styles.Home}>
        <header className={styles.HomeHeader}>
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
