import { connect } from 'react-redux'
import { getCurrentCloudcastEmbed } from 'app/actions'
import { getCloudcastDetails, getListCloudcastKeys } from 'app/selectors'

import Home from './Home'

const mapActionCreators = (dispatch) => ({
  getCurrentCloudcastEmbed: (key, slug) => dispatch(getCurrentCloudcastEmbed(key, slug))
})

const mapStateToProps = (state) => ({
  cloudcastDetails: getCloudcastDetails(state),
  listCloudcastKeys: getListCloudcastKeys(state)
})

export default connect(mapStateToProps, mapActionCreators)(Home)
