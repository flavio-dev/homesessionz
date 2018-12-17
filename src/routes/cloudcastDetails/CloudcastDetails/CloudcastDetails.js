import React, { Component } from 'react'
import PropTypes from 'prop-types'

import slugToKey from 'utils/slugToKey'

import './CloudcastDetails.css'

class CloudcastDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCloudcast: {},
      currentCloudcastKey: ''
    }

    if (props.match && props.match.params && props.match.params.cloudcastId) {
      const key = slugToKey(props.match.params.cloudcastId)
      this.state.currentCloudcastKey = key
      if (props.cloudcastDetails[key]) {
        this.state.currentCloudcast = this.props.cloudcastDetails[key]
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.cloudcastDetails[this.state.currentCloudcastKey] &&
      this.state.currentCloudcast.slug !== nextProps.cloudcastDetails[this.state.currentCloudcastKey].slug) {
      return true
    } else {
      return false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match && props.match.params && props.match.params.cloudcastId) {
      const key = slugToKey(props.match.params.cloudcastId)
      if (!state.currentCloudcast.slug &&
          props.cloudcastDetails[key] &&
          key === state.currentCloudcastKey) {
        // if we don't have the currentCloudcast for the current key,
        // we need to set it if returned in props.
        return {...state, currentCloudcast: props.cloudcastDetails[key]}
      } else if (key !== state.currentCloudcastKey && props.cloudcastDetails[key]) {
        // if the current key changed, then we need to pick up the value of new current cloudcast
        return {
          currentCloudcastKey: key,
          currentCloudcast: props.cloudcastDetails[key]
        }
      } else if (key !== state.currentCloudcastKey && !props.cloudcastDetails[key]) {
        // we assume that either the key is not correct, or the props.cloudcastDetails[key]
        // has not been set yet. We clear the state
        return {
          currentCloudcast: {},
          currentCloudcastKey: ''
        }
      }
    }

    return state
  }

  render() {
    const cast = this.state.currentCloudcast
    return (
      <div>
        {cast.slug}
      </div>
    )
  }
}

CloudcastDetails.propTypes = {
  match: PropTypes.object,
  cloudcastDetails: PropTypes.object
}

export default CloudcastDetails
