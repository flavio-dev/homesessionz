export const SET_PLAYING_CLOUDCAST = 'SET_PLAYING_CLOUDCAST'
export const SET_IS_FEATURED_CLOUDCAST = 'SET_IS_FEATURED_CLOUDCAST'
export const SET_INDEX_IS_FEATURED_CLOUDCAST = 'SET_INDEX_IS_FEATURED_CLOUDCAST'
export const SET_IS_PLAYING = 'SET_IS_PLAYING'
export const SET_CLOUDCAST_DETAILS = 'SET_CLOUDCAST_DETAILS'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const SET_SEARCH_RESULTS_IN_NAME = 'SET_SEARCH_RESULTS_IN_NAME'
export const SET_SEARCH_RESULTS_IN_TAGS = 'SET_SEARCH_RESULTS_IN_TAGS'

export const setPlayingCloudcast = (url) => {
  return {
    type: SET_PLAYING_CLOUDCAST,
    url
  }
}

export const setIndexIsFeaturedCloudcast = (index) => {
  return {
    type: SET_INDEX_IS_FEATURED_CLOUDCAST,
    index
  }
}

export const setIsFeaturedCloudcast = (cloudcast) => {
  return {
    type: SET_IS_FEATURED_CLOUDCAST,
    isFeatured: cloudcast
  }
}

export const setIsPlaying = (isPlaying) => {
  return {
    type: SET_IS_PLAYING,
    isPlaying
  }
}

export const setCloudcastDetails = (details, index) => {
  return {
    type: SET_CLOUDCAST_DETAILS,
    details,
    index
  }
}

export const setSearchText = (text) => {
  return {
    type: SET_SEARCH_TEXT,
    text
  }
}

export const setSearchResultsInName = (results) => {
  return {
    type: SET_SEARCH_RESULTS_IN_NAME,
    results
  }
}

export const setSearchResultsInTags = (results) => {
  return {
    type: SET_SEARCH_RESULTS_IN_TAGS,
    results
  }
}
