import { combineReducers } from 'redux'

import setPlayingCloudcastReducer from './playingCloudcast'
import setIsFeaturedCloudcastReducer from './isFeaturedCloudcast'
import setIsPlayingReducer from './isPlaying'
import setCloudcastDetailsReducer from './cloudcastDetails'
import setListCloudcastKeysReducer from './listCloudcastKeys'
import setSearchTextReducer from './searchText'

export default combineReducers({
  playingCloudcast: setPlayingCloudcastReducer,
  isFeaturedCloudcast: setIsFeaturedCloudcastReducer,
  cloudcastDetails: setCloudcastDetailsReducer,
  listCloudcastKeys: setListCloudcastKeysReducer,
  isPlaying: setIsPlayingReducer,
  searchText: setSearchTextReducer
})
