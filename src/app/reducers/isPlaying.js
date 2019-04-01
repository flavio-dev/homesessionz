import { SET_IS_PLAYING } from '../actions'

const initialState = false
export const setIsPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_PLAYING:
      return action.isPlaying
    default:
      return state
  }
}

export default setIsPlayingReducer
