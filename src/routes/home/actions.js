export const SET_LIST_MIXES = 'SET_LIST_MIXES'
export const GET_INITIAL_LIST_MIXES = 'GET_INITIAL_LIST_MIXES'

export const setListMixes = (listMixes) => {
  return {
    type: SET_LIST_MIXES,
    listMixes
  }
}

export const getInitialListMixes = () => {
  return {
    type: GET_INITIAL_LIST_MIXES
  }
}
