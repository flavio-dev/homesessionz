import { connect } from 'react-redux'
import { getSearchResults, getSearchText } from 'app/selectors'

import SearchModal from './SearchModal'

const mapActionCreators = (dispatch) => ({})

const mapStateToProps = (state) => ({
  searchText: getSearchText(state),
  searchResults: getSearchResults(state)
})

export default connect(mapStateToProps, mapActionCreators)(SearchModal)
