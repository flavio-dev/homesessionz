import React, { Component } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

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
      },
      featured: false,
      latest: false,
      grid: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    let newState = Object.assign({}, state)
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
      ? 'home__section__inner home__section__inner-featured home--visible'
      : 'home__section__inner home__section__inner-featured'
    const latestClass = this.state.latest
      ? 'home__section__inner home__section__inner-latest home--visible'
      : 'home__section__inner home__section__inner-latest'
    const gridClass = this.state.grid ? 'home__grid__inner home--visible' : 'home__grid__inner'

    return (
      <div>
        <Video
          smallVid={smallHomeVid}
          mediumVid={mediumHomeVid}
          largeVid={largeHomeVid}
        />
        <div className='home__wrapper'>
          <h1 className='home__title'>høme sessiønz</h1>
          <ScrollTrigger onEnter={() => this.onEnterViewport('featured')} throttleScroll={500}>
            <section className='home__section'>
              <div className={featuredClass}>
                <h2 className='title-margin'>featured</h2>
                <CloudcastBigContainer cloudcast={this.state.isFeaturedCloudcast.cloudcast} />
              </div>
            </section>
          </ScrollTrigger>
          <ScrollTrigger onEnter={() => this.onEnterViewport('latest')} throttleScroll={500}>
            <section className='home__section'>
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
        </div>
      </div>
    )
  }
}

export default Home
