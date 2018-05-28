import { connect } from 'react-redux'
import { getCurrentCloudcastEmbed } from 'app/actions'

import CloudcastHome from './CloudcastHome'

const mapActionCreators = (dispatch) => ({
  getCurrentCloudcastEmbed: (key, slug) => dispatch(getCurrentCloudcastEmbed(key, slug))
})

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapActionCreators)(CloudcastHome)
