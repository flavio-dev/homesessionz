import { combineReducers } from 'redux'
import appReducers from 'routes/home/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    appReducers,
    ...asyncReducers
  })
}
