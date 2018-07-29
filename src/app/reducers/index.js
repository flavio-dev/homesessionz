import { combineReducers } from 'redux'

import setCurrentCloudcastReducer from './currentCloudcast'
import setIsFeaturedCloudcastReducer from './isFeaturedCloudcast'
import setInitialListFromGithubReducer from './initialListFromGithub'
import setIsPlayingReducer from './isPlaying'
import setCloudcastDetailsReducer from './cloudcastDetails'
import setListCloudcastKeysReducer from './listCloudcastKeys'

export default combineReducers({
  currentCloudcast: setCurrentCloudcastReducer,
  isFeaturedCloudcast: setIsFeaturedCloudcastReducer,
  cloudcastDetails: setCloudcastDetailsReducer,
  listCloudcastKeys: setListCloudcastKeysReducer,
  initialListFromGithub: setInitialListFromGithubReducer,
  isPlaying: setIsPlayingReducer
})
