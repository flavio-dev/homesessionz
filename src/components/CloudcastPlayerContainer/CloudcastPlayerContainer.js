import { connect } from 'react-redux'
import { getPlayingCloudcast, getIsPlaying } from 'app/selectors'
import { setIsPlaying, setHasCloudLoaded } from 'app/actions'

import CloudcastPlayer from './CloudcastPlayer'

const mapActionCreators = (dispatch) => ({
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying)),
  setHasCloudLoaded: () => dispatch(setHasCloudLoaded())
})

const mapStateToProps = (state) => ({
  playingCloudcast: getPlayingCloudcast(state),
  isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastPlayer)
