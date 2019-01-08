import { combineReducers } from 'redux'

import setPlayingCloudcastReducer from './playingCloudcast'
import setIsFeaturedCloudcastReducer from './isFeaturedCloudcast'
import setIsPlayingReducer from './isPlaying'
import setCloudcastDetailsReducer from './cloudcastDetails'
import setListCloudcastKeysReducer from './listCloudcastKeys'
import searchReducers from './search'

export default combineReducers({
  playingCloudcast: setPlayingCloudcastReducer,
  isFeaturedCloudcast: setIsFeaturedCloudcastReducer,
  cloudcastDetails: setCloudcastDetailsReducer,
  listCloudcastKeys: setListCloudcastKeysReducer,
  isPlaying: setIsPlayingReducer,
  searchReducers: searchReducers
})
