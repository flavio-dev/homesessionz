import { call, fork, put } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'
import getEnvUrlPrefix from 'utils/envUrl'

import {
  setCloudcastDetails,
  setIndexIsFeaturedCloudcast,
  setIsFeaturedCloudcast
} from './actions'

export function* getInitialListMixesFromGithub() {
  const initialListOfMixes = yield call(
    whatwgFetch,
    'https://raw.githubusercontent.com/flavio-dev/homesessionzserver/master/data.json'
  )
  var dateObj = new Date()
  var day = dateObj.getDate()
  const indexFeatured = (((initialListOfMixes.length + 3) * day) % (initialListOfMixes.length - 1)) + 1
  yield put(setIndexIsFeaturedCloudcast(indexFeatured))

  for (let i = 0; i < initialListOfMixes.length; i++) {
    yield put(setCloudcastDetails({
      slug: i.toString()
    }, i))
    yield fork(getCloudcastDetailsCall, initialListOfMixes[i], i, i === indexFeatured)
  }
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
