import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Turntable from 'components/Turntable'
import ImagePano from 'components/ImagePano'
import PlayPauseIcon from 'components/PlayPauseIcon'

// TESTDATA\
// import imageTemp from 'temp/image.jpeg'

import slugToKey from 'utils/slugToKey'

import './CloudcastDetails.css'

class CloudcastDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCloudcast: {},
      currentCloudcastKey: ''
    }

    if (props.match && props.match.params && props.match.params.cloudcastId) {
      const key = slugToKey(props.match.params.cloudcastId)
      this.state.currentCloudcastKey = key
      if (props.cloudcastDetails[key]) {
        this.state.currentCloudcast = this.props.cloudcastDetails[key]
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.cloudcastDetails[this.state.currentCloudcastKey] &&
    //   this.state.currentCloudcast.slug !== nextProps.cloudcastDetails[this.state.currentCloudcastKey].slug) {
    //   return true
    // } else {
    //   console.log('?????')
    //   return false
    // }
    return true
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match && props.match.params && props.match.params.cloudcastId) {
      const key = slugToKey(props.match.params.cloudcastId)
      if (!state.currentCloudcast.slug &&
          props.cloudcastDetails[key] &&
          key === state.currentCloudcastKey) {
        // if we don't have the currentCloudcast for the current key,
        // we need to set it if returned in props.
        return {...state, currentCloudcast: props.cloudcastDetails[key]}
      } else if (key !== state.currentCloudcastKey && props.cloudcastDetails[key]) {
        // if the current key changed, then we need to pick up the value of new current cloudcast
        return {
          currentCloudcastKey: key,
          currentCloudcast: props.cloudcastDetails[key]
        }
      } else if (key !== state.currentCloudcastKey && !props.cloudcastDetails[key]) {
        // we assume that either the key is not correct, or the props.cloudcastDetails[key]
        // has not been set yet. We clear the state
        return {
          currentCloudcast: {},
          currentCloudcastKey: ''
        }
      }
    }

    return state
  }

  playPauseTrigger = () => {
    const cast = this.state.currentCloudcast
    if (cast.url) {
      if (this.props.isPlaying && this.props.playingCloudcast === cast.url) {
        // the current player playing is this one. so we pause.
        this.props.setIsPlaying(false)
      } else if (!this.props.isPlaying && this.props.playingCloudcast === cast.url) {
        // the current player not playing. so we play.
        this.props.setIsPlaying(true)
      } else {
        // another cloudcast is being played. we load this one and play
        this.props.setPlayingCloudcast(cast.url)
        this.props.setIsPlaying(true)
      }
    }
  }

  render() {
    const cast = this.state.currentCloudcast

    return (
      <div>
        <div className='cd__top'>
          <img className='cd__top__img' src={cast.pictures && cast.pictures['320wx320h']} />
          <div className='cd__top__wrapper font--medium'>
            <div
              className='cd__top__play-pause'
              onClick={this.playPauseTrigger}
            >
              <PlayPauseIcon reversed isPlaying={this.props.isPlaying && this.props.playingCloudcast === cast.url} />
            </div>
            <div>{cast.name}</div>
            <div style={{display: 'none'}}>
              <Turntable isPlaying={this.props.isPlaying && this.props.playingCloudcast === cast.url} />
            </div>
          </div>
        </div>
        <ImagePano
          urlSmall={cast.pictures && cast.pictures['640wx640h']}
          urlLarge={cast.pictures && cast.pictures['1024wx1024h']}
        />
        {cast.audio_length}
      </div>
    )
  }
}

CloudcastDetails.propTypes = {
  match: PropTypes.object,
  cloudcastDetails: PropTypes.object,
  setPlayingCloudcast: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  playingCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default CloudcastDetails
