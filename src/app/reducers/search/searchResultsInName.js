import { SET_SEARCH_RESULTS_IN_NAME } from '../../actions'

const initialState = []
export const setSearchResultsInNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS_IN_NAME:
      return action.results
    default:
      return state
  }
}

export default setSearchResultsInNameReducer
