import { SET_SEARCH_TEXT } from '../../actions'

const initialState = ''
export const setSearchTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.text
    default:
      return state
  }
}

export default setSearchTextReducer
