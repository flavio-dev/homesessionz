import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const playPauseTrigger = (WrappedComponent, mapStateToProps, mapActionCreators) => {
  const addPlayPauseTrigger = ({...props}) => {
    const playPauseTriggerPassedAsProps = () => {
      if (props.cloudcast.url) {
        if (props.isPlaying && props.playingCloudcast === props.cloudcast.url) {
          // the current player playing is this one. so we pause.
          props.setIsPlaying(false)
        } else if (!props.isPlaying && props.playingCloudcast === props.cloudcast.url) {
          // the current player not playing. so we play.
          props.setIsPlaying(true)
        } else {
          // another cloudcast is being played. we load this one and play
          props.setPlayingCloudcast(props.cloudcast.url)
          props.setIsPlaying(true)
        }
      }
    }

    return <WrappedComponent {...props} playPauseTrigger={playPauseTriggerPassedAsProps} />
  }

  addPlayPauseTrigger.propTypes = {
    cloudcast: PropTypes.object,
    isPlaying: PropTypes.bool,
    playingCloudcast: PropTypes.string,
    setIsPlaying: PropTypes.func.isRequired,
    setPlayingCloudcast: PropTypes.func.isRequired
  }

  return connect(mapStateToProps, mapActionCreators)(addPlayPauseTrigger)
}

export default playPauseTrigger
