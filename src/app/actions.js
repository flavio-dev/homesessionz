export const SET_CURRENT_CLOUDCAST = 'SET_CURRENT_CLOUDCAST'
export const SET_LIST_MIXES_GITHUB = 'SET_LIST_MIXES_GITHUB'

export const setCurrentCloudcast = (embedHtml) => {
  return {
    type: SET_CURRENT_CLOUDCAST,
    embedHtml
  }
}

export const setInitialListMixesFromGithub = (listMixes) => {
  return {
    type: SET_LIST_MIXES_GITHUB,
    listMixes
  }
}
