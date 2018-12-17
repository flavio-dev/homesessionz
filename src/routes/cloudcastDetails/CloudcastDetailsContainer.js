import { connect } from 'react-redux'
import { getCloudcastDetails } from 'app/selectors'

import CloudcastDetails from './CloudcastDetails'

const mapActionCreators = () => ({})

const mapStateToProps = (state) => ({
  cloudcastDetails: getCloudcastDetails(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastDetails)
