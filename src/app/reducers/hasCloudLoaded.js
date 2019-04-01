import { SET_HAS_CLOUD_LOADED } from '../actions'

const initialState = false
export const setHasCloudLoadedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HAS_CLOUD_LOADED:
      return true
    default:
      return state
  }
}

export default setHasCloudLoadedReducer
