import { connect } from 'react-redux'
import { getCloudcastDetails, getListCloudcastKeys } from 'app/selectors'

import CloudcastDetails from './CloudcastDetails'

const mapActionCreators = () => ({})

const mapStateToProps = (state) => ({
  cloudcastDetails: getCloudcastDetails(state),
  listCloudcastKeys: getListCloudcastKeys(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastDetails)
