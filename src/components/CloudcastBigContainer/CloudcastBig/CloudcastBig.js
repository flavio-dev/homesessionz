import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CloudcastBig.css'

class CloudcastBig extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.cloudcast.name}
        </div>
      </div>
    )
  }
}

CloudcastBig.propTypes = {
  setCurrentCloudcast: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  cloudcast: PropTypes.object,
  currentCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default CloudcastBig
