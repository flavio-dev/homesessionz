import { combineReducers } from 'redux'

import setCurrentCloudcastReducer from './currentCloudcast'
import setInitialListFromGithubReducer from './initialListFromGithub'
import setIsPlayingReducer from './isPlaying'
import setCloudcastDetailsReducer from './cloudcastDetails'
import setListCloudcastKeysReducer from './listCloudcastKeys'

export default combineReducers({
  currentCloudcast: setCurrentCloudcastReducer,
  cloudcastDetails: setCloudcastDetailsReducer,
  listCloudcastKeys: setListCloudcastKeysReducer,
  initialListFromGithub: setInitialListFromGithubReducer,
  isPlaying: setIsPlayingReducer
})
