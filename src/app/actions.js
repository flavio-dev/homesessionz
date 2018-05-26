export const SET_CURRENT_CLOUDCAST_EMBED = 'SET_CURRENT_CLOUDCAST_EMBED'
export const SET_LIST_MIXES_GITHUB = 'SET_LIST_MIXES_GITHUB'
export const SET_CLOUDCAST_DETAILS = 'SET_CLOUDCAST_DETAILS'

export const setCurrentCloudcastEmbed = (embedHtml) => {
  return {
    type: SET_CURRENT_CLOUDCAST_EMBED,
    embedHtml
  }
}

export const setCloudcastDetails = (details) => {
  return {
    type: SET_CLOUDCAST_DETAILS,
    details
  }
}

export const setInitialListMixesFromGithub = (listMixes) => {
  return {
    type: SET_LIST_MIXES_GITHUB,
    listMixes
  }
}
