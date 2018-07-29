import { connect } from 'react-redux'
import { setCurrentCloudcast, setIsPlaying } from 'app/actions'
import { getIsPlaying, getcurrentCloudcast } from 'app/selectors'

import CloudcastHome from './CloudcastHome'

const mapActionCreators = (dispatch) => ({
  setCurrentCloudcast: (url) => dispatch(setCurrentCloudcast(url)),
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying))
})

const mapStateToProps = (state) => ({
  currentCloudcast: getcurrentCloudcast(state),
  isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastHome)
