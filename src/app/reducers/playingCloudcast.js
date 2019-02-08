import React from 'react'
import { SET_PLAYING_CLOUDCAST } from '../actions'
import MsgPlaying from 'components/Msgs/MsgPlaying'
import { toast } from 'react-toastify'

const initialState = ''

export const setPlayingCloudcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYING_CLOUDCAST:
      toast.success(<MsgPlaying name={action.name} />)
      return action.url
    default:
      return state
  }
}

export default setPlayingCloudcastReducer
