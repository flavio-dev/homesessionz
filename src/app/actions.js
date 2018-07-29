export const SET_CURRENT_CLOUDCAST = 'SET_CURRENT_CLOUDCAST'
export const SET_IS_PLAYING = 'SET_IS_PLAYING'
export const SET_LIST_MIXES_GITHUB = 'SET_LIST_MIXES_GITHUB'
export const SET_CLOUDCAST_DETAILS = 'SET_CLOUDCAST_DETAILS'

export const setCurrentCloudcast = (url) => {
  return {
    type: SET_CURRENT_CLOUDCAST,
    url
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

export const setInitialListMixesFromGithub = (listMixes) => {
  return {
    type: SET_LIST_MIXES_GITHUB,
    listMixes
  }
}
