import { SET_CLOUDCAST_DETAILS, SET_CLOUDCAST_EXTRA_DETAILS } from '../actions'
import slugToKey from 'utils/slugToKey'

const initialState = {}
export const setCloudcastDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOUDCAST_DETAILS:
      let newState = { ...state }
      delete newState[action.index.toString()]
      newState[slugToKey(action.details.slug)] = action.details
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
