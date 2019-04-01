import React, { Component } from 'react'
import MixcloudPlayer from 'react-player/lib/players/Mixcloud'
import PropTypes from 'prop-types'

import './CloudcastPlayer.css'

class CloudcastPlayer extends Component {
  render() {
    return <div className='cp'>
      <MixcloudPlayer
        url={this.props.playingCloudcast}
        height='120px'
        width='100%'
        playing={this.props.isPlaying}
        onPlay={() => {
          if (!this.props.isPlaying) {
            this.props.setIsPlaying(true)
          }
        }}
        onPause={() => {
          if (this.props.isPlaying) {
            this.props.setIsPlaying(false)
          }
        }}
        onReady={() => {
          this.props.setHasCloudLoaded()
        }}
      />
    </div>
  }
}

CloudcastPlayer.propTypes = {
  setIsPlaying: PropTypes.func,
  setHasCloudLoaded: PropTypes.func,
  playingCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired
}

export default CloudcastPlayer
