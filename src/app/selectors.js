import { createSelector } from 'reselect'

const getAppReducers = state => state.appReducers

export const getInitialListFromGithub = createSelector(
  [getAppReducers],
  appReducer => appReducer.initialListFromGithub
)

export const getCurrentEmbedCloudcast = createSelector(
  [getAppReducers],
  appReducer => appReducer.currentCloudcastEmbed
)

export const getCloudcastDetails = createSelector(
  [getAppReducers],
  appReducer => appReducer.cloudcastDetails
)

export const getListCloudcastKeys = createSelector(
  [getAppReducers],
  appReducer => appReducer.listCloudcastKeys
)
