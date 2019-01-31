import { connect } from 'react-redux'
import { getSearchText } from 'app/selectors'
import { setSearchText, clearSearchText } from 'app/actions'

import Search from './Search'

const mapActionCreators = (dispatch) => ({
  setSearchText: (text) => dispatch(setSearchText(text)),
  clearSearchText: () => dispatch(clearSearchText())
})

const mapStateToProps = (state) => ({
  searchText: getSearchText(state)
})

export default connect(mapStateToProps, mapActionCreators)(Search)
