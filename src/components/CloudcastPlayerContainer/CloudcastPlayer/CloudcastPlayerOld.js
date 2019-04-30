import React, { Component } from 'react'
import MixcloudPlayer from 'react-player/lib/players/Mixcloud'
import PropTypes from 'prop-types'

import './CloudcastPlayer.css'

class CloudcastPlayer extends Component {
  render() {
    return <div className='cp'>
      <MixcloudPlayer
        url={this.props.playingCloudcast}
        height='60px'
        width='100%'
        playing={this.props.isPlaying}
        config={{
          mixcloud: {
            options: {
              mini: true
            }
          }
        }}
        onStart={() => {
          console.log('onStart')
        }}
        onPlay={() => {
          console.log('onPlay')
          if (!this.props.isPlaying) {
            this.props.setIsPlaying(true)
          }
        }}
        onPause={() => {
          console.log('onPause')
          if (this.props.isPlaying) {
            this.props.setIsPlaying(false)
          }
        }}
        onReady={() => {
          console.log('onReady')
          this.props.setHasCloudLoaded()
          this.props.setIsPlaying(true)
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
