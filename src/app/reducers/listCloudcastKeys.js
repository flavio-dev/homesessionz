import { SET_CLOUDCAST_DETAILS } from '../actions'
import slugToKey from 'utils/slugToKey'

const initialState = []
export const setListCloudcastKeysReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOUDCAST_DETAILS:
      let newState = state.slice(0)
      const key = slugToKey(action.details.slug)
      if (newState.indexOf(key) === -1) {
        typeof newState[action.index] !== 'undefined'
          ? newState[action.index] = key
          : newState.push(key)
      }
      return newState
    default:
      return state
  }
}

export default setListCloudcastKeysReducer
