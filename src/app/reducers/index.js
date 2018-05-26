import { combineReducers } from 'redux'

import setCurrentCloudastReducer from './currentCloudcast'
import setInitialListFromGithubReducer from './initialListFromGithub'

export default combineReducers({
  currentCloudcast: setCurrentCloudastReducer,
  initialListFromGithub: setInitialListFromGithubReducer
})
