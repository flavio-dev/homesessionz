import createSagaMiddleware from 'redux-saga'
import { call, fork } from 'redux-saga/effects'

import { getInitialListMixesFromGithub, watchGetCloudcastDetails } from 'app/sagas'

export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
  yield fork(watchGetCloudcastDetails)
  yield call(getInitialListMixesFromGithub)
}
