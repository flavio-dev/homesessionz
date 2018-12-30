import { combineReducers } from 'redux'
import appReducers from 'app/reducers'
import { connectRouter } from 'connected-react-router'

export const makeRootReducer = (history) => {
  return combineReducers({
    appReducers,
    router: connectRouter(history)
  })
}
