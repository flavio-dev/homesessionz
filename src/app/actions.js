export const GET_CURRENT_CLOUDCAST_EMBED = 'GET_CURRENT_CLOUDCAST_EMBED'
export const SET_CURRENT_CLOUDCAST_EMBED = 'SET_CURRENT_CLOUDCAST_EMBED'
export const SET_CURRENT_CLOUDCAST_URL = 'SET_CURRENT_CLOUDCAST_URL'
export const SET_IS_PLAYING = 'SET_IS_PLAYING'
export const SET_LIST_MIXES_GITHUB = 'SET_LIST_MIXES_GITHUB'
export const SET_CLOUDCAST_DETAILS = 'SET_CLOUDCAST_DETAILS'
export const SET_CLOUDCAST_EMBED_DETAILS = 'SET_CLOUDCAST_EMBED_DETAILS'

export const setCurrentCloudcastEmbed = (embedHtml) => {
  return {
    type: SET_CURRENT_CLOUDCAST_EMBED,
    embedHtml
  }
}

export const setCurrentCloudcastUrl = (url) => {
  return {
    type: SET_CURRENT_CLOUDCAST_URL,
    url
  }
}

export const setIsPlaying = (isPlaying) => {
  return {
    type: SET_IS_PLAYING,
    isPlaying
  }
}

export const setCloudcastEmbedDetails = (embedHtml, key) => {
  return {
    type: SET_CLOUDCAST_EMBED_DETAILS,
    embedHtml,
    key
  }
}

export const getCurrentCloudcastEmbed = (key, slug) => {
  return {
    type: GET_CURRENT_CLOUDCAST_EMBED,
    key,
    slug
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
