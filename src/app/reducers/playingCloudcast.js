import { SET_PLAYING_CLOUDCAST } from '../actions'

const initialState = ''

export const setPlayingCloudcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYING_CLOUDCAST:
      return action.url
    default:
      return state
  }
}

export default setPlayingCloudcastReducer
