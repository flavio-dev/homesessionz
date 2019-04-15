import React, { Component } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

import CloudcastHomeContainer from 'components/CloudcastHomeContainer'
import CloudcastHomePlacebo from 'components/CloudcastHomeContainer/CloudcastHomePlacebo'
import CloudcastBigContainer from 'components/CloudcastBigContainer'
import VideoWrapper from 'components/VideoWrapper'

import './Home.css'

import smallHomeVid from './homeMobile.mp4'
import mediumHomeVid from './homeTablet.mp4'
import largeHomeVid from './homeDesktop.mp4'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listCloudcastKeys: [],
      cloudcastDetails: {},
      isFeaturedCloudcast: {
        index: 0,
        cloudcast: {}
      },
      featured: false,
      latest: false,
      grid: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    let newState = Object.assign({}, state)
    console.log('props.cloudcastDetails = ', props.cloudcastDetails)
    newState.listCloudcastKeys = props.listCloudcastKeys
    newState.cloudcastDetails = props.cloudcastDetails
    newState.isFeaturedCloudcast = props.isFeaturedCloudcast
    return newState
  }

  onEnterViewport = (section) => {
    switch (section) {
      case 'featured':
        this.setState({
          featured: true
        })
        break
      case 'latest':
        this.setState({
          latest: true
        })
        break
      case 'grid':
        this.setState({
          grid: true
        })
        break
      default:
    }
  }

  render() {
    const firstCloudcast = this.state.cloudcastDetails[this.state.listCloudcastKeys[0]] || {}
    const featuredClass = this.state.featured
      ? 'home__section home__section-featured home--visible'
      : 'home__section home__section-featured'
    const latestClass = this.state.latest
      ? 'home__section home__section-latest home--visible'
      : 'home__section home__section-latest'
    const gridClass = this.state.grid ? 'home__grid__inner home--visible' : 'home__grid__inner'

    return (
      <VideoWrapper
        smallVid={smallHomeVid}
        mediumVid={mediumHomeVid}
        largeVid={largeHomeVid}
        title='høme sessiønz'
      >
        <ScrollTrigger onEnter={() => this.onEnterViewport('featured')} throttleScroll={500}>
          <section>
            <div className={featuredClass}>
              <h2 className='title-margin'>featured</h2>
              <CloudcastBigContainer cloudcast={this.state.isFeaturedCloudcast.cloudcast} />
            </div>
          </section>
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => this.onEnterViewport('latest')} throttleScroll={500}>
          <section>
            <div className={latestClass}>
              <h2 className='title-margin'>latest</h2>
              <CloudcastBigContainer cloudcast={firstCloudcast} />
            </div>
          </section>
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => this.onEnterViewport('grid')} throttleScroll={500}>
          <section className='home__grid'>
            <hr />
            <section className={gridClass}>
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
        </ScrollTrigger>
      </VideoWrapper>
    )
  }
}

export default Home
