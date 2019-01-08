import { connect } from 'react-redux'
import { getSearchResultsInName, getSearchResultsInTags, getSearchText } from 'app/selectors'

import SearchModal from './SearchModal'

const mapActionCreators = (dispatch) => ({})

const mapStateToProps = (state) => ({
  searchText: getSearchText(state),
  searchResultsInName: getSearchResultsInName(state),
  searchResultsInTag: getSearchResultsInTags(state)
})

export default connect(mapStateToProps, mapActionCreators)(SearchModal)
