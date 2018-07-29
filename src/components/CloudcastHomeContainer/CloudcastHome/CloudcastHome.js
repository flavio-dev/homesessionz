import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './CloudcastHome.css'

class CloudcastHome extends Component {
  render() {
    const largePicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures.large
      ? this.props.cloudcast.pictures.large
      : ''

    return (
      <div className='CloudcastHome'>
        <div
          style={{
            backgroundImage: 'url(' + largePicUrl + ')',
            backgroundSize: 'cover'
          }}
          className='CloudcastHomeImg'
          onClick={() => {
            this.props.setCurrentCloudcast(this.props.cloudcast.url)
            this.props.setIsPlaying(true)
          }}
        />
        {this.props.cloudcast.name && this.props.cloudcast.name.length &&
          <Link to={this.props.cloudcast.slug} className='CloudcastHomeText'>{this.props.cloudcast.name}</Link>
        }
        {(!this.props.cloudcast.name || !this.props.cloudcast.name.length) &&
          <div className='CloudcastHomeTextPlaceholder' />
        }
        <div onClick={() => this.props.setIsPlaying(!this.props.isPlaying)}>PALYPAUSE</div>
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
  isPlaying: PropTypes.bool
}

export default CloudcastHome
