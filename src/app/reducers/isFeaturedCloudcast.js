import { SET_IS_FEATURED_CLOUDCAST, SET_INDEX_IS_FEATURED_CLOUDCAST } from '../actions'

const initialState = {
  index: 0,
  cloudcast: {}
}

export const setIsFeaturedCloudcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INDEX_IS_FEATURED_CLOUDCAST:
      let newState = Object.assign({}, state)
      newState.index = action.index
      return newState
    case SET_IS_FEATURED_CLOUDCAST:
      let newState2 = Object.assign({}, state)
      newState2.cloudcast = action.isFeatured
      return newState2
    default:
      return state
  }
}

export default setIsFeaturedCloudcastReducer
