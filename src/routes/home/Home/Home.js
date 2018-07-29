import React, { Component } from 'react'

import CloudcastHomeContainer from 'components/CloudcastHomeContainer'
import CloudcastHomePlacebo from 'components/CloudcastHomeContainer/CloudcastHomePlacebo'
import CloudcastBigContainer from 'components/CloudcastBigContainer'
import Video from 'components/Video'

import './Home.css'

import smallHomeVid from './homeSmall.m4v'
import mediumHomeVid from './homeMedium.m4v'
import largeHomeVid from './homeLarge.m4v'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listCloudcastKeys: [],
      cloudcastDetails: {},
      isFeaturedCloudcast: {
        index: 0,
        cloudcast: {}
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    let newState = Object.assign({}, state)
    newState.listCloudcastKeys = props.listCloudcastKeys
    newState.cloudcastDetails = props.cloudcastDetails
    newState.isFeaturedCloudcast = props.isFeaturedCloudcast
    return newState
  }

  render() {
    const firstCloudcast = this.state.cloudcastDetails[this.state.listCloudcastKeys[0]] || {}
    return (
      <div>
        <Video
          smallVid={smallHomeVid}
          mediumVid={mediumHomeVid}
          largeVid={largeHomeVid}
        />
        <div className='HomeGridWrapper'>
          <h1 className='HomeTitle'>høme sessiønz</h1>
          <section className='HomeSection'>
            <div className='HomeSectionInner'>
              <h2>featured</h2>
              <CloudcastBigContainer cloudcast={this.state.isFeaturedCloudcast.cloudcast} />
            </div>
          </section>
          <section className='HomeSection'>
            <div className='HomeSectionInner'>
              <h2>latest</h2>
              <CloudcastBigContainer cloudcast={firstCloudcast} />
            </div>
          </section>
          <div className='HomeGrid'>
            {this.state.listCloudcastKeys.map((key, index) => {
              if (index === 0 || index === this.state.isFeaturedCloudcast.index) {
                return null
              }

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
            <CloudcastHomePlacebo />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
