import { connect } from 'react-redux'
import { getSearchText } from 'app/selectors'

import Layout from './Layout'

const mapActionCreators = (dispatch) => ({})

const mapStateToProps = (state) => ({
  hasSearchText: !!getSearchText(state).length
})

export default connect(mapStateToProps, mapActionCreators)(Layout)
