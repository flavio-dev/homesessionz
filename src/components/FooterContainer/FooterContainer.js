import { connect } from 'react-redux'
import { getCurrentEmbedCloudcast } from 'app/selectors'

import Footer from './Footer'

const mapActionCreators = () => ({})

const mapStateToProps = (state) => ({
  currentCloudcast: getCurrentEmbedCloudcast(state)
})

export default connect(mapStateToProps, mapActionCreators)(Footer)
