import { connect } from 'react-redux'
import { getHasCloudLoaded } from 'app/selectors'

import Footer from './Footer'

const mapActionCreators = () => ({})

const mapStateToProps = (state) => ({
  hasCloudLoaded: getHasCloudLoaded(state)
})

export default connect(mapStateToProps, mapActionCreators)(Footer)
