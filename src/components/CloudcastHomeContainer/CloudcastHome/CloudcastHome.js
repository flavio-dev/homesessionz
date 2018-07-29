import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './CloudcastHome.css'

class CloudcastHome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beingPlayed: false
    }
  }

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
        />
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
  getCurrentCloudcastEmbed: PropTypes.func.isRequired,
  cloudcast: PropTypes.object
}

export default CloudcastHome
