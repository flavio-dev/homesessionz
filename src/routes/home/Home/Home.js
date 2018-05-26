import React, { Component } from 'react'
import styles from './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listCloudcastKeys: [],
      cloudcastDetails: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    let newState = Object.assign({}, state)
    if (props.listCloudcastKeys.length > state.listCloudcastKeys.length) {
      newState.listCloudcastKeys = props.listCloudcastKeys
      newState.cloudcastDetails = props.cloudcastDetails
    }
    return newState
  }

  render() {
    return (
      <div className={styles.Home}>
        <header className={styles.HomeHeader}>
          <h1 className={styles.HomeTitle}>Welcome to React</h1>
        </header>
        {this.state.listCloudcastKeys.map((key, index) => {
          const cloudcast = this.state.cloudcastDetails[key]
          if (cloudcast) {
            return <div key={key}>
              <img className={styles.HomeImg} src={cloudcast.pictures.large} />
              <p>{cloudcast.name}</p>
            </div>
          } else {
            return null
          }
        })}
        <p className={styles.HomeIntro}>
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Home
