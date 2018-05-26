import { createSelector } from 'reselect'

const getAppReducers = state => state.appReducers

export const getCurrentEmbedCloudcast = createSelector(
  [getAppReducers],
  appReducer => appReducer.currentCloudcast
)
