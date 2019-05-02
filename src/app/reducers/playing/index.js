import { combineReducers } from 'redux'

import setIsPlayingReducer from './isPlaying'
import setReqPlayingReducer from './reqPlaying'

export default combineReducers({
  isPlaying: setIsPlayingReducer,
  reqPlaying: setReqPlayingReducer
})
