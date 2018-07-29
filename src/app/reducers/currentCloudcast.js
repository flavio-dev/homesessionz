import { SET_CURRENT_CLOUDCAST_URL } from '../actions'

const initialState = ''
export const setCurrentCloudastUrlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CLOUDCAST_URL:
      return action.url
    default:
      return state
  }
}

export default setCurrentCloudastUrlReducer
