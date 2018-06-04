import { SET_CLOUDCAST_DETAILS, SET_CLOUDCAST_EMBED_DETAILS } from '../actions'
import slugToKey from 'utils/slugToKey'

const initialState = {}
export const setCloudcastDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOUDCAST_DETAILS:
      let newState = Object.assign({}, state)
      newState[action.index.toString()] = null
      newState[slugToKey(action.details.slug)] = action.details
      return newState
    case SET_CLOUDCAST_EMBED_DETAILS:
      let newStateTwo = Object.assign({}, state)
      newStateTwo[action.key].embedHtml = action.embedHtml
      return newStateTwo
    default:
      return state
  }
}

export default setCloudcastDetailsReducer
