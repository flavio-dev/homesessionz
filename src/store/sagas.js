import createSagaMiddleware from 'redux-saga'
import { call, fork } from 'redux-saga/effects'

import {
  getInitialListMixesFromGithub,
  watchGetCloudcastDetails,
  watchGetEmbedHtml
} from 'app/sagas'

export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
  yield fork(watchGetCloudcastDetails)
  yield fork(watchGetEmbedHtml)
  yield call(getInitialListMixesFromGithub)
}
