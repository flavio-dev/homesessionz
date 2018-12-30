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
        <div className='home__wrapper'>
          <h1 className='home__title'>høme sessiønz</h1>
          <section className='home__section'>
            <div className='home__section__inner'>
              <h2 className='title-margin'>featured</h2>
              <CloudcastBigContainer cloudcast={this.state.isFeaturedCloudcast.cloudcast} />
            </div>
          </section>
          <section className='home__section'>
            <div className='home__section__inner'>
              <h2 className='title-margin'>latest</h2>
              <CloudcastBigContainer cloudcast={firstCloudcast} />
            </div>
          </section>
          <section className='home__grid'>
            <hr />
            <section className='home__grid__inner'>
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
            </section>
          </section>
        </div>
      </div>
    )
  }
}

export default Home
