import React from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import MsgPlaying from 'components/MsgPlaying'
import { getCloudcastDetails, getIsPlaying, getPlayingCloudcast } from 'app/selectors'
import { setPlayingCloudcast, setIsPlaying } from 'app/actions'

import CloudcastDetails from './CloudcastDetails'

const mapActionCreators = (dispatch) => ({
  setPlayingCloudcast: (url, name) => {
    dispatch(setPlayingCloudcast(url))
    toast.success(<MsgPlaying name={name} />)
  },
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying))
})

const mapStateToProps = (state) => ({
  cloudcastDetails: getCloudcastDetails(state),
  playingCloudcast: getPlayingCloudcast(state),
  isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastDetails)
