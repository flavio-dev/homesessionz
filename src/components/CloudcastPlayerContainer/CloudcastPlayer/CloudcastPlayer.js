import React, { Component } from 'react'
import MixcloudPlayer from 'react-player/lib/players/Mixcloud'
import PropTypes from 'prop-types'

import './CloudcastPlayer.css'

class CloudcastPlayer extends Component {
  render() {
    console.log('## CDOICAIOCDIOCDCDIO rendering CloudcastPlayer')
    return <div className='cp'>
      <MixcloudPlayer
        url={this.props.playingCloudcast}
        height='60px'
        width='100%'
        playing={this.props.isPlaying}
        onPlay={() => {
          console.log('ONPLAY')
          if (!this.props.isPlaying) {
            this.props.setIsPlaying(true)
          }
        }}
        onPause={() => {
          console.log('ONPAUSE');
          if (this.props.isPlaying) {
            this.props.setIsPlaying(false)
          }
        }}
      />
    </div>
  }
}

CloudcastPlayer.propTypes = {
  setIsPlaying: PropTypes.func,
  playingCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired
}

export default CloudcastPlayer
