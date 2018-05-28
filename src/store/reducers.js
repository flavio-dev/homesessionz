import { combineReducers } from 'redux'
import appReducers from 'app/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    appReducers,
    ...asyncReducers
  })
}
