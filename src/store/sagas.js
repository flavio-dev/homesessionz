import createSagaMiddleware from 'redux-saga'
import { call, fork } from 'redux-saga/effects'

import {
  getInitialListMixesFromGithub,
  watchProceedSearch
} from 'app/sagas'

export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
  yield fork(watchProceedSearch)
  yield call(getInitialListMixesFromGithub)
}
