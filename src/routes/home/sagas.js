import { take, call, put } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'

import { setListUsers, GET_INITIAL_LIST_MIXES } from './actions'

export function* getSetInitialListMixes() {
  let url = '/users/'
  if (window.location.port.length) {
    url = 'http://localhost:4000/users/'
  }

  try {
    const list = yield call(whatwgFetch, url)
    yield put(setListUsers(list))
  } catch (error) {
    console.log('error')
  }
}

export function* watchGetInitialListMixes() {
  while (true) {
    yield take(GET_INITIAL_LIST_MIXES)
    yield call(getSetInitialListMixes)
  }
}
