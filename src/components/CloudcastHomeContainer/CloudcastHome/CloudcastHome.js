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
    return (
      <div className={styles.CloudcastHome}>
        <img
          alt={this.props.cloudcast.name}
          className={styles.CloudcastHomeImg}
          src={this.props.cloudcast.pictures.large}
          onClick={() => this.props.getCurrentCloudcastEmbed(this.props.cloudcast.key, this.props.cloudcast.slug)}
        />
        <p>{this.props.cloudcast.name}</p>
      </div>
    )
  }
}

CloudcastHome.propTypes = {
  getCurrentCloudcastEmbed: PropTypes.func.isRequired,
  cloudcast: PropTypes.object
}

export default CloudcastHome
