import { connect } from 'react-redux'
import { getCloudcastDetails, getIsPlaying, getPlayingCloudcast } from 'app/selectors'
import { setPlayingCloudcast, setReqPlaying } from 'app/actions'

import CloudcastDetails from './CloudcastDetails'

const mapActionCreators = (dispatch) => ({
  setPlayingCloudcast: (url, name) => {
    dispatch(setPlayingCloudcast(url, name))
  },
  setReqPlaying: (reqPlaying) => dispatch(setReqPlaying(reqPlaying))
})

const mapStateToProps = (state) => ({
  cloudcastDetails: getCloudcastDetails(state),
  playingCloudcast: getPlayingCloudcast(state),
  isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastDetails)
