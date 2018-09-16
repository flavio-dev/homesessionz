import { connect } from 'react-redux'
import { setPlayingCloudcast, setIsPlaying } from 'app/actions'
import { getIsPlaying, getPlayingCloudcast } from 'app/selectors'

import CloudcastHome from './CloudcastHome'

const mapActionCreators = (dispatch) => ({
  setPlayingCloudcast: (url) => dispatch(setPlayingCloudcast(url)),
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying))
})

const mapStateToProps = (state) => ({
  playingCloudcast: getPlayingCloudcast(state),
  isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastHome)
