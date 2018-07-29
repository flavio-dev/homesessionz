import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import PlayIcon from 'components/PlayIcon'
import PauseIcon from 'components/PauseIcon'

import './CloudcastHome.css'

class CloudcastHome extends Component {
  constructor(props) {
    super()

    this.playPauseTrigger = this.playPauseTrigger.bind(this)
  }

  playPauseTrigger() {
    if (this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
      // the current player playing is this one. so we pause.
      this.props.setIsPlaying(false)
    } else if (!this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
      // the current player not playing. so we play.
      this.props.setIsPlaying(true)
    } else {
      // another cloudcast is being played. we load this one and play
      this.props.setCurrentCloudcast(this.props.cloudcast.url)
      this.props.setIsPlaying(true)
    }
  }

  render() {
    const largePicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures.large
      ? this.props.cloudcast.pictures.large
      : ''

    let PlayPauseButton = <PlayIcon />
    if (this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
      PlayPauseButton = <PauseIcon />
    }

    return (
      <div className='CloudcastHome'>
        <div
          style={{
            backgroundImage: 'url(' + largePicUrl + ')',
            backgroundSize: 'cover'
          }}
          className='CloudcastHomeImg'
          onClick={this.playPauseTrigger}
        >
          <div className='CloudcastHomePlayButton'>
            {PlayPauseButton}
          </div>
        </div>
        {this.props.cloudcast.name && this.props.cloudcast.name.length &&
          <Link to={this.props.cloudcast.slug} className='CloudcastHomeText'>{this.props.cloudcast.name}</Link>
        }
        {(!this.props.cloudcast.name || !this.props.cloudcast.name.length) &&
          <div className='CloudcastHomeTextPlaceholder' />
        }
      </div>
    )
  }
}

CloudcastHome.defaultProps = {
  cloudcast: {
    pictures: {
      large: ''
    },
    name: ''
  }
}

CloudcastHome.propTypes = {
  setCurrentCloudcast: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  cloudcast: PropTypes.object,
  currentCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default CloudcastHome
