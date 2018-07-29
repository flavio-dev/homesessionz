import { connect } from 'react-redux'
import { setCurrentCloudcastUrl, setIsPlaying } from 'app/actions'
import { getIsPlaying } from 'app/selectors'

import CloudcastHome from './CloudcastHome'

const mapActionCreators = (dispatch) => ({
  setCurrentCloudcastUrl: (url) => dispatch(setCurrentCloudcastUrl(url)),
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying))
})

const mapStateToProps = (state) => ({
  isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastHome)
