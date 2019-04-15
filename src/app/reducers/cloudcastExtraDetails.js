import { SET_CLOUDCAST_EXTRA_DETAILS } from '../actions'

const initialState = {}
export const setCloudcastExtraDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOUDCAST_EXTRA_DETAILS:

    default:
      return state
  }
}

export default setCloudcastExtraDetailsReducer
