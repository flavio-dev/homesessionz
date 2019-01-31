import { SET_SEARCH_TEXT, CLEAR_SEARCH_TEXT } from '../../actions'

const initialState = ''
export const setSearchTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.text
    case CLEAR_SEARCH_TEXT:
      return ''
    default:
      return state
  }
}

export default setSearchTextReducer
