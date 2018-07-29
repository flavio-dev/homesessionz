import { connect } from 'react-redux'
import { getCloudcastDetails, getListCloudcastKeys, getIsFeaturedCloudcast } from 'app/selectors'

import Home from './Home'

const mapActionCreators = () => ({})

const mapStateToProps = (state) => ({
  cloudcastDetails: getCloudcastDetails(state),
  listCloudcastKeys: getListCloudcastKeys(state),
  isFeaturedCloudcast: getIsFeaturedCloudcast(state)
})

export default connect(mapStateToProps, mapActionCreators)(Home)
