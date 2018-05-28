import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CloudcastHomeContainer from 'components/CloudcastHomeContainer'

import styles from './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listCloudcastKeys: [],
      cloudcastDetails: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    let newState = Object.assign({}, state)
    if (props.listCloudcastKeys.length > state.listCloudcastKeys.length) {
      newState.listCloudcastKeys = props.listCloudcastKeys
      newState.cloudcastDetails = props.cloudcastDetails
    }
    return newState
  }

  render() {
    return (
      <div className={styles.Home}>
        {this.state.listCloudcastKeys.map((key, index) => {
          const cloudcast = this.state.cloudcastDetails[key]
          if (cloudcast) {
            return <CloudcastHomeContainer cloudcast={cloudcast} />
          } else {
            return null
          }
        })}
      </div>
    )
  }
}

Home.propTypes = {
  getCurrentCloudcastEmbed: PropTypes.func.isRequired
}

export default Home
