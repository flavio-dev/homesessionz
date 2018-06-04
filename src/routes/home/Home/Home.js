import React, { Component } from 'react'

import CloudcastHomeContainer from 'components/CloudcastHomeContainer'
import CloudcastHomePlacebo from 'components/CloudcastHomeContainer/CloudcastHomePlacebo'
import Video from 'components/Video'

import styles from './Home.css'

import smallHomeVid from './homeSmall.m4v'
import mediumHomeVid from './homeMedium.m4v'
import largeHomeVid from './homeLarge.m4v'

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
    newState.listCloudcastKeys = props.listCloudcastKeys
    newState.cloudcastDetails = props.cloudcastDetails
    return newState
  }

  render() {
    return (
      <div>
        <Video
          smallVid={smallHomeVid}
          mediumVid={mediumHomeVid}
          largeVid={largeHomeVid}
        />
        <div className={styles.HomeGridWrapper}>
          <h1 className={styles.HomeTitle}>høme sessiønz</h1>
          <div className={styles.HomeGrid}>
            {this.state.listCloudcastKeys.map((key) => {
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
        </div>
      </div>
    )
  }
}

export default Home
