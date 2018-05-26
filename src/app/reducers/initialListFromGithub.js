import { SET_LIST_MIXES_GITHUB } from '../actions'

const initialState = []
export const setInitialListFromGithubReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_MIXES_GITHUB:
      return action.listMixes
    default:
      return state
  }
}

export default setInitialListFromGithubReducer
