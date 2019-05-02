
import { SET_REQ_PLAYING } from '../../actions'

const initialState = false
export const setReqPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REQ_PLAYING:
      return action.reqPlaying
    default:
      return state
  }
}

export default setReqPlayingReducer
