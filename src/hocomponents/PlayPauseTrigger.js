import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setPlayingCloudcast, setReqPlaying } from 'app/actions'
import { getIsPlaying, getPlayingCloudcast } from 'app/selectors'

const playPauseTrigger = (WrappedComponent) => {
  const addPlayPauseTrigger = ({ ...props }) => {
    const playPauseTriggerPassedAsProps = () => {
      if (props.cloudcast.url) {
        if (props.isPlaying && props.playingCloudcast === props.cloudcast.url) {
          // the current player playing is this one. so we pause.
          props.setReqPlaying(false)
        } else if (!props.isPlaying && props.playingCloudcast === props.cloudcast.url) {
          // the current player not playing. so we play.
          props.setReqPlaying(true)
        } else {
          // another cloudcast is being played. we load this one and play
          props.setPlayingCloudcast(props.cloudcast.url, props.cloudcast.name.toLowerCase())
          props.setReqPlaying(true)
        }
      }
    }

    return <WrappedComponent {...props} playPauseTrigger={playPauseTriggerPassedAsProps} />
  }

  addPlayPauseTrigger.propTypes = {
    cloudcast: PropTypes.object,
    isPlaying: PropTypes.bool,
    playingCloudcast: PropTypes.string,
    setReqPlaying: PropTypes.func.isRequired,
    setPlayingCloudcast: PropTypes.func.isRequired
  }

  const mapActionCreators = (dispatch) => ({
    setPlayingCloudcast: (url, name) => {
      dispatch(setPlayingCloudcast(url, name))
    },
    setReqPlaying: (isPlaying) => dispatch(setReqPlaying(isPlaying))
  })

  const mapStateToProps = (state) => ({
    playingCloudcast: getPlayingCloudcast(state),
    isPlaying: getIsPlaying(state)
  })

  return connect(mapStateToProps, mapActionCreators)(addPlayPauseTrigger)
}

export default playPauseTrigger
