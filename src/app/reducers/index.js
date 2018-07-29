import { combineReducers } from 'redux'

import setCurrentCloudcastUrlReducer from './currentCloudcast'
import setInitialListFromGithubReducer from './initialListFromGithub'
import setIsPlayingReducer from './isPlaying'
import setCloudcastDetailsReducer from './cloudcastDetails'
import setListCloudcastKeysReducer from './listCloudcastKeys'

export default combineReducers({
  currentCloudcastUrl: setCurrentCloudcastUrlReducer,
  cloudcastDetails: setCloudcastDetailsReducer,
  listCloudcastKeys: setListCloudcastKeysReducer,
  initialListFromGithub: setInitialListFromGithubReducer,
  isPlaying: setIsPlayingReducer
})
