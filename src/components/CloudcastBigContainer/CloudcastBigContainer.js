import { connect } from 'react-redux'
import { setCurrentCloudcast, setIsPlaying } from 'app/actions'
import { getIsPlaying, getCurrentCloudcast } from 'app/selectors'

import CloudcastBig from './CloudcastBig'

const mapActionCreators = (dispatch) => ({
  setCurrentCloudcast: (url) => dispatch(setCurrentCloudcast(url)),
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying))
})

const mapStateToProps = (state) => ({
  currentCloudcast: getCurrentCloudcast(state),
  isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastBig)
