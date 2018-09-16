import { combineReducers } from 'redux'

import setPlayingCloudcastReducer from './playingCloudcast'
import setIsFeaturedCloudcastReducer from './isFeaturedCloudcast'
import setInitialListFromGithubReducer from './initialListFromGithub'
import setIsPlayingReducer from './isPlaying'
import setCloudcastDetailsReducer from './cloudcastDetails'
import setListCloudcastKeysReducer from './listCloudcastKeys'

export default combineReducers({
  playingCloudcast: setPlayingCloudcastReducer,
  isFeaturedCloudcast: setIsFeaturedCloudcastReducer,
  cloudcastDetails: setCloudcastDetailsReducer,
  listCloudcastKeys: setListCloudcastKeysReducer,
  initialListFromGithub: setInitialListFromGithubReducer,
  isPlaying: setIsPlayingReducer
})
