import { createSelector } from 'reselect'

const getAppReducers = state => state.appReducers

export const getSearchReducers = createSelector(
  [getAppReducers],
  appReducer => appReducer.searchReducers
)

export const getPlayingReducers = createSelector(
  [getAppReducers],
  appReducer => appReducer.playing
)

export const getPlayingCloudcast = createSelector(
  [getAppReducers],
  appReducer => appReducer.playingCloudcast
)

export const getIsFeaturedCloudcast = createSelector(
  [getAppReducers],
  appReducer => appReducer.isFeaturedCloudcast
)

export const getIsPlaying = createSelector(
  [getPlayingReducers],
  playingReducer => playingReducer.isPlaying
)

export const getReqPlaying = createSelector(
  [getPlayingReducers],
  playingReducer => playingReducer.reqPlaying
)

export const getHasCloudLoaded = createSelector(
  [getAppReducers],
  appReducer => appReducer.hasMixcloudEmbedLoaded
)

export const getCloudcastDetails = createSelector(
  [getAppReducers],
  appReducer => appReducer.cloudcastDetails
)

export const getListCloudcastKeys = createSelector(
  [getAppReducers],
  appReducer => appReducer.listCloudcastKeys
)

export const getSearchText = createSelector(
  [getSearchReducers],
  searchReducer => searchReducer.text
)

export const getSearchResultsInName = createSelector(
  [getSearchReducers],
  searchReducer => searchReducer.resultsInName
)

export const getSearchResultsInTags = createSelector(
  [getSearchReducers],
  searchReducer => searchReducer.resultsInTags
)
