import { connect } from 'react-redux'
import { getCloudcastDetails, getListCloudcastKeys } from 'app/selectors'

import Home from './Home'

const mapActionCreators = () => ({})

const mapStateToProps = (state) => ({
  cloudcastDetails: getCloudcastDetails(state),
  listCloudcastKeys: getListCloudcastKeys(state)
})

export default connect(mapStateToProps, mapActionCreators)(Home)
