import React, { Component } from 'react'

import CloudcastHomeContainer from 'components/CloudcastHomeContainer'
import CloudcastHomePlacebo from 'components/CloudcastHomeContainer/CloudcastHomePlacebo'

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
        {this.state.listCloudcastKeys.map((key, index) => {
          const cloudcast = this.state.cloudcastDetails[key]
          if (cloudcast) {
            return <CloudcastHomeContainer cloudcast={cloudcast} key={key} />
          } else {
            return null
          }
        })}
        <CloudcastHomePlacebo />
        <CloudcastHomePlacebo />
        <CloudcastHomePlacebo />
        <CloudcastHomePlacebo />
      </div>
    )
  }
}

export default Home
