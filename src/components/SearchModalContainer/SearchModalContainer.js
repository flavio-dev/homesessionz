import { connect } from 'react-redux'
import { getSearchResultsInName, getSearchResultsInTags, getSearchText, getPlayingCloudcast } from 'app/selectors'
import { clearSearchText } from 'app/actions'

import SearchModal from './SearchModal'

const mapActionCreators = (dispatch) => ({
  clearSearchText: () => dispatch(clearSearchText())
})

const mapStateToProps = (state) => ({
  searchText: getSearchText(state),
  searchResultsInName: getSearchResultsInName(state),
  searchResultsInTags: getSearchResultsInTags(state),
  isPlayerLoaded: !!getPlayingCloudcast(state)
})

export default connect(mapStateToProps, mapActionCreators)(SearchModal)
