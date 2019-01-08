import { SET_SEARCH_RESULTS_IN_TAGS } from '../../actions'

const initialState = []
export const setSearchResultsInTagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS_IN_TAGS:
      return action.results
    default:
      return state
  }
}

export default setSearchResultsInTagsReducer
