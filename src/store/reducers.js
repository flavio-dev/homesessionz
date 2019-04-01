import { combineReducers } from 'redux'
import appReducers from 'app/reducers'
import { connectRouter } from 'connected-react-router'

export const makeRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  appReducers
})
