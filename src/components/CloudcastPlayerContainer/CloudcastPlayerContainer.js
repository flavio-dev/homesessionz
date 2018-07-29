import { connect } from 'react-redux'
import { getCurrentCloudcastUrl, getIsPlaying } from 'app/selectors'
import { setIsPlaying } from 'app/actions'

import CloudcastPlayer from './CloudcastPlayer'

const mapActionCreators = (dispatch) => ({
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying))
})

const mapStateToProps = (state) => ({
  currentCloudcastUrl: getCurrentCloudcastUrl(state),
  isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastPlayer)
