import { combineReducers } from 'redux'

import setSearchTextReducer from './searchText'
import setSearchResultsInNameReducer from './searchResultsInName'
import setSearchResultsInTagsReducer from './searchResultsInTags'

export default combineReducers({
  text: setSearchTextReducer,
  resultsInName: setSearchResultsInNameReducer,
  resultsInTags: setSearchResultsInTagsReducer
})
