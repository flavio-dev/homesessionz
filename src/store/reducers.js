import { combineReducers } from 'redux'
import homeReducers from 'routes/home/reducers'
import appReducers from 'app/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    homeReducers,
    appReducers,
    ...asyncReducers
  })
}
