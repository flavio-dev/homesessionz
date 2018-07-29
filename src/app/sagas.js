import { call, fork, put, take } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'
import getEnvUrlPrefix from 'utils/envUrl'

import {
  setInitialListMixesFromGithub,
  setCloudcastDetails,
  SET_LIST_MIXES_GITHUB
} from './actions'

export function* getInitialListMixesFromGithub() {
  const initialListOfMixes = yield call(
    whatwgFetch,
    'https://raw.githubusercontent.com/flavio-dev/homesessionzserver/master/data.json'
  )
  yield put(setInitialListMixesFromGithub(initialListOfMixes))
}

function* getCloudcastDetailsCall(cloudcastKey, index) {
  const prefixUrl = getEnvUrlPrefix()
  const url = prefixUrl + '/cloudcast' + cloudcastKey
  try {
    const cloudDetails = yield call(whatwgFetch, url)
    yield put(setCloudcastDetails(cloudDetails, index))
  } catch (error) {
    console.log('error')
  }
}

export function * watchGetCloudcastDetails() {
  const initial = yield take(SET_LIST_MIXES_GITHUB)
  for (let i = 0; i < initial.listMixes.length; i++) {
    yield put(setCloudcastDetails({
      slug: i.toString()
    }, i))
    yield fork(getCloudcastDetailsCall, initial.listMixes[i], i)
  }
}
