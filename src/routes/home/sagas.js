import { take, call, put } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'

import { setListMixes, GET_INITIAL_LIST_MIXES } from './actions'

export function* getSetInitialListMixes() {
  const url = 'https://raw.githubusercontent.com/flavio-dev/homesessionz/master/data.json'

  try {
    const list = yield call(whatwgFetch, url)
    yield put(setListMixes(list))
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
