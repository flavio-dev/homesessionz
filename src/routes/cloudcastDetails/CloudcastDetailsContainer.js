import { connect } from 'react-redux'
import { getCloudcastDetails, getIsPlaying, getPlayingCloudcast } from 'app/selectors'
import { setPlayingCloudcast, setIsPlaying } from 'app/actions'

import CloudcastDetails from './CloudcastDetails'

const mapActionCreators = (dispatch) => ({
  setPlayingCloudcast: (url) => dispatch(setPlayingCloudcast(url)),
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying))
})

const mapStateToProps = (state) => ({
  cloudcastDetails: getCloudcastDetails(state),
  playingCloudcast: getPlayingCloudcast(state),
  isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastDetails)
