import React, { Component } from 'react'
import MixcloudPlayer from 'react-player/lib/players/Mixcloud'
import PropTypes from 'prop-types'

import './CloudcastPlayer.css'

class CloudcastPlayer extends Component {
  constructor(props) {
    super(props)

    // introducing a timeout for countering the issue with the mixcloud widget
    this.timeout = null

    this.state = {
      playingCloudcast: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.playingCloudcast !== props.playingCloudcast) {
      props.setIsPlaying(false)
      return { playingCloudcast: props.playingCloudcast }
    }
    return state
  }

  render() {
    return <div className='cp'>
      <MixcloudPlayer
        url={this.state.playingCloudcast}
        height='60px'
        width='100%'
        playing={this.props.reqPlaying}
        config={{
          mixcloud: {
            options: {
              mini: true
            }
          }
        }}
        onPlay={() => {
          if (!this.props.isPlaying) {
            this.timeout = setTimeout(() => {
              this.props.setIsPlaying(true)
              this.props.setReqPlaying(true)
            }, 250)
          }
        }}
        onPause={() => {
          clearTimeout(this.timeout)
          if (this.props.isPlaying) {
            this.props.setIsPlaying(false)
            this.props.setReqPlaying(false)
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
