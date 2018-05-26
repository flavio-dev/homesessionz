import { SET_CURRENT_CLOUDCAST } from '../actions'

const initialState = ''
export const setCurrentCloudastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CLOUDCAST:
      return action.cloudcast
    default:
      return state
  }
}

export default setCurrentCloudastReducer
