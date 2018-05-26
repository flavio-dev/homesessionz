import { SET_CURRENT_CLOUDCAST_EMBED } from '../actions'

const initialState = ''
export const setCurrentCloudastEmbedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CLOUDCAST_EMBED:
      return action.cloudcast
    default:
      return state
  }
}

export default setCurrentCloudastEmbedReducer
