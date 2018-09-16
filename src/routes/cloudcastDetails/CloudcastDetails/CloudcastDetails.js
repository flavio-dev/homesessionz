import React, { Component } from 'react'
import PropTypes from 'prop-types'

import slugToKey from 'utils/slugToKey'

import './CloudcastDetails.css'

class CloudcastDetails extends Component {
  constructor(props) {
    super(props)

    console.log('props = ', props)
    if (props.match && props.match.params && props.match.params.cloudcastId) {
      const key = slugToKey(props.match.params.cloudcastId)
      console.log('key = ', key)
      console.log('props.cloudcastDetails = ', props.cloudcastDetails)
      if (props.cloudcastDetails[key]) {
        console.log('hey I have my current cloud =D no sweat ', this.props.cloudcastDetails[key])
      }
    }

    this.state = {
      listCloudcastKeys: [],
      cloudcastDetails: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    // let newState = Object.assign({}, state)
    // newState.listCloudcastKeys = props.listCloudcastKeys
    // newState.cloudcastDetails = props.cloudcastDetails
    // newState.isFeaturedCloudcast = props.isFeaturedCloudcast
    // return newState
    return state
  }

  render() {
    return (<div />)
  }
}

CloudcastDetails.propTypes = {
  match: PropTypes.object,
  cloudcastDetails: PropTypes.object
}

export default CloudcastDetails
