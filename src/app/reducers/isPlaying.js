import { SET_IS_PLAYING } from '../actions'

const initialState = true
export const setIsPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_PLAYING:
      return action.isPlaying
    default:
      return state
  }
}

export default setIsPlayingReducer
