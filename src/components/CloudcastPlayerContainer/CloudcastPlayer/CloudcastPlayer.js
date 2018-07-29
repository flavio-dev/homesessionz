import React, { Component } from 'react'
import MixcloudPlayer from 'react-player/lib/players/Mixcloud'
import PropTypes from 'prop-types'

import './CloudcastPlayer.css'

class CloudcastPlayer extends Component {
  render() {
    return <div className='CloudcastPlayer'>
      <MixcloudPlayer
        url={this.props.currentCloudcast}
        height='60px'
        width='100%'
        playing={this.props.isPlaying}
        onPlay={() => this.props.setIsPlaying(true)}
        onPause={() => this.props.setIsPlaying(false)}
      />
    </div>
  }
}

CloudcastPlayer.propTypes = {
  setIsPlaying: PropTypes.func,
  currentCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired
}

export default CloudcastPlayer
