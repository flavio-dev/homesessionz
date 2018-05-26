import { combineReducers } from 'redux'

import setCurrentCloudcastEmbedReducer from './currentCloudcast'
import setInitialListFromGithubReducer from './initialListFromGithub'
import setCloudcastDetailsReducer from './cloudcastDetails'
import setListCloudcastKeysReducer from './listCloudcastKeys'

export default combineReducers({
  currentCloudcastEmbed: setCurrentCloudcastEmbedReducer,
  cloudcastDetails: setCloudcastDetailsReducer,
  listCloudcastKeys: setListCloudcastKeysReducer,
  initialListFromGithub: setInitialListFromGithubReducer
})
