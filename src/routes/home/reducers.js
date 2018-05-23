import { SET_LIST_MIXES } from './actions'

const initialState = []
export const listUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_MIXES:
      return action.listMixes
    default:
      return state
  }
}

export default listUsersReducer
