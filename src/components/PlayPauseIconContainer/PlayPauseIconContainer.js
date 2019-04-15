import { connect } from 'react-redux'
import { getCloudcastDetails } from 'app/selectors'

import PlayPauseIcon from './PlayPauseIcon'

const mapActionCreators = (dispatch) => ({})

const mapStateToProps = (state) => ({
  cloudcastDetails: getCloudcastDetails(state)
})

export default connect(mapStateToProps, mapActionCreators)(PlayPauseIcon)
