import { combineReducers } from 'redux'
import appReducers from 'app/reducers'
import { routerReducer } from 'react-router-redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    appReducers,
    routing: routerReducer,
    ...asyncReducers
  })
}
