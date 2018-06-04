import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './CloudcastHome.css'

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
      <div className={styles.CloudcastHome}>
        <div
          style={{
            backgroundImage: 'url(' + largePicUrl + ')',
            backgroundSize: 'cover'
          }}
          className={styles.CloudcastHomeImg}
        />
        {this.props.cloudcast.name && this.props.cloudcast.name.length &&
          <a href={this.props.cloudcast.slug} className={styles.CloudcastHomeText}>{this.props.cloudcast.name}</a>
        }
        {(!this.props.cloudcast.name || !this.props.cloudcast.name.length) &&
          <div className={styles.CloudcastHomeTextPlaceholder} />
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
