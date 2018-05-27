import { connect } from 'react-redux'
import { getCurrentEmbedCloudcast } from 'app/selectors'

import CloudcastPlayer from './CloudcastPlayer'

const mapActionCreators = () => ({})

const mapStateToProps = (state) => ({
  currentCloudcast: getCurrentEmbedCloudcast(state)
})

export default connect(mapStateToProps, mapActionCreators)(CloudcastPlayer)
