import { connect } from 'react-redux'
import { getPlayingCloudcast, getIsPlaying, getReqPlaying } from 'app/selectors'
import { setIsPlaying, setReqPlaying, setHasCloudLoaded } from 'app/actions'

import CloudcastPlayer from './CloudcastPlayer'

const mapActionCreators = (dispatch) => ({
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying)),
  setReqPlaying: (reqPlaying) => dispatch(setReqPlaying(reqPlaying)),
  setHasCloudLoaded: () => dispatch(setHasCloudLoaded())
})

const mapStateToProps = (state) => ({
  playingCloudcast: getPlayingCloudcast(state),
  isPlaying: getIsPlaying(state),
  reqPlaying: getReqPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastPlayer)
