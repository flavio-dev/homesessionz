import { SET_CLOUDCAST_DETAILS, SET_CLOUDCAST_EXTRA_DETAILS } from '../actions'

const initialState = {}
export const setCloudcastDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOUDCAST_DETAILS:
      let newState = { ...state }
      delete newState[action.index.toString()]
      newState[action.details.slugToKey] = action.details
      return newState
    case SET_CLOUDCAST_EXTRA_DETAILS:
      let newStateExtra = { ...state }
      newStateExtra[action.cloudcastKey].extraDetails = action.extraDetails
      return newStateExtra
    default:
      return state
  }
}

export default setCloudcastDetailsReducer
