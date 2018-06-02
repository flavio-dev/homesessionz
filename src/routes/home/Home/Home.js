import React, { Component } from 'react'

import CloudcastHomeContainer from 'components/CloudcastHomeContainer'
import CloudcastHomePlacebo from 'components/CloudcastHomeContainer/CloudcastHomePlacebo'

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
    if (props.listCloudcastKeys.length > state.listCloudcastKeys.length) {
      newState.listCloudcastKeys = props.listCloudcastKeys
      newState.cloudcastDetails = props.cloudcastDetails
    }
    return newState
  }

  render() {
    return (
      <div>
        <div className={styles.HomeVideoWrapper}>
          <video autoPlay muted loop className={styles.HomeVideoSmall}>
            <source src={smallHomeVid} type='video/mp4' />
          </video>
          <video autoPlay muted loop className={styles.HomeVideoMedium}>
            <source src={mediumHomeVid} type='video/mp4' />
          </video>
          <video autoPlay muted loop className={styles.HomeVideoLarge}>
            <source src={largeHomeVid} type='video/mp4' />
          </video>
        </div>
        <div className={styles.HomeGridWrapper}>
          <div className={styles.HomeGrid}>
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
        </div>
      </div>
    )
  }
}

export default Home
