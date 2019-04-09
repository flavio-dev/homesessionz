import createSagaMiddleware from 'redux-saga'
import { call, fork } from 'redux-saga/effects'

import {
  getInitialListMixesFromGithub,
  watchProceedSearch,
  watchGetTracklist
} from 'app/sagas'

export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
  yield fork(watchProceedSearch)
  yield fork(watchGetTracklist)
  yield call(getInitialListMixesFromGithub)
}
