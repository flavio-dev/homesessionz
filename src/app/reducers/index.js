import { combineReducers } from 'redux'

import setPlayingCloudcastReducer from './playingCloudcast'
import setIsFeaturedCloudcastReducer from './isFeaturedCloudcast'
import playingReducers from './playing'
import setHasCloudLoadedReducer from './hasCloudLoaded'
import setCloudcastDetailsReducer from './cloudcastDetails'
import setListCloudcastKeysReducer from './listCloudcastKeys'
import searchReducers from './search'

export default combineReducers({
  playingCloudcast: setPlayingCloudcastReducer,
  isFeaturedCloudcast: setIsFeaturedCloudcastReducer,
  cloudcastDetails: setCloudcastDetailsReducer,
  listCloudcastKeys: setListCloudcastKeysReducer,
  hasMixcloudEmbedLoaded: setHasCloudLoadedReducer,
  playing: playingReducers,
  searchReducers: searchReducers
})
