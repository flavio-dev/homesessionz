import { call, fork, put, take, select } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'
import getEnvUrlPrefix from 'utils/envUrl'

import {
  setInitialListMixesFromGithub,
  setCloudcastDetails,
  SET_LIST_MIXES_GITHUB,
  setIndexIsFeaturedCloudcast,
  setIsFeaturedCloudcast
} from './actions'

import { getIsFeaturedCloudcast } from './selectors'

export function* getInitialListMixesFromGithub() {
  const initialListOfMixes = yield call(
    whatwgFetch,
    'https://raw.githubusercontent.com/flavio-dev/homesessionzserver/master/data.json'
  )
  var dateObj = new Date()
  var day = dateObj.getDate()
  const indexFeatured = (((initialListOfMixes.length + 3) * day) % (initialListOfMixes.length - 1)) + 1
  yield put(setIndexIsFeaturedCloudcast(indexFeatured))
  yield put(setInitialListMixesFromGithub(initialListOfMixes))
}

function* getCloudcastDetailsCall(cloudcastKey, index, isFeatured) {
  const prefixUrl = getEnvUrlPrefix()
  const url = prefixUrl + '/cloudcast' + cloudcastKey
  try {
    const cloudDetails = yield call(whatwgFetch, url)
    yield put(setCloudcastDetails(cloudDetails, index))
    if (isFeatured) {
      yield put(setIsFeaturedCloudcast(cloudDetails))
    }
  } catch (error) {
    console.log('error')
  }
}

export function * watchGetCloudcastDetails() {
  const initial = yield take(SET_LIST_MIXES_GITHUB)
  const isFeaturedCloudcast = yield select(getIsFeaturedCloudcast)
  for (let i = 0; i < initial.listMixes.length; i++) {
    yield put(setCloudcastDetails({
      slug: i.toString()
    }, i))
    yield fork(getCloudcastDetailsCall, initial.listMixes[i], i, i === isFeaturedCloudcast.index)
  }
}
