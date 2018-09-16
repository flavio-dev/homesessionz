import createSagaMiddleware from 'redux-saga'
import { call } from 'redux-saga/effects'

import {
  getInitialListMixesFromGithub
} from 'app/sagas'

export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
  yield call(getInitialListMixesFromGithub)
}
