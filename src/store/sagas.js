import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

import { watchGetInitialListMixes } from 'routes/home/sagas'

export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
  yield fork(watchGetInitialListMixes)
}
