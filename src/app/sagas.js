import { call, put, race, take } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'
import getEnvUrlPrefix from 'utils/envUrl'
import initialListOfMixes from 'data.json'

import {
  setInitialListMixesFromGithub,
  setCurrentCloudcastEmbed,
  setCloudcastDetails,
  SET_LIST_MIXES_GITHUB,
  SET_CLOUDCAST_DETAILS
} from './actions'

export function* getInitialListMixesFromGithub() {
  yield put(setInitialListMixesFromGithub(initialListOfMixes))
}

function* getCloudcastDetails({cloudcastKey}) {
  const prefixUrl = getEnvUrlPrefix()
  const url = prefixUrl + '/cloudcast' + cloudcastKey
  try {
    const cloudDetails = yield call(whatwgFetch, url)
    yield put(setCloudcastDetails(cloudDetails))
  } catch (error) {
    console.log('error')
  }
}

export function * watchGetCloudcastDetails() {
  while (true) {
    const { initial, specific } = yield race({
      initial: take(SET_LIST_MIXES_GITHUB),
      specific: take(SET_CLOUDCAST_DETAILS)
    })

    if (initial) {
      console.log('Hello we are in initial = ', initial)
      for (let i = 0; i < initial.listMixes.length; i++) {
        yield call(getCloudcastDetails, {cloudcastKey: initial.listMixes[i]})
      }
    }

    if (specific) {
      console.log('Hello we are in specific')
    }
  }
}

export function* getEmbedHtml() {
  const prefixUrl = getEnvUrlPrefix()
  const url = prefixUrl + '/cloudcast/NetilRadio/s%C3%B8unds-fl%C3%B8ating-ar%C3%B8und-apr182-by-this-is-a-pr%C3%B8ject-21st-april-2018/embed-json' // eslint-disable-line
  try {
    const embedJson = yield call(whatwgFetch, url)
    console.log('example =D  =  ', embedJson)
    yield put(setCurrentCloudcastEmbed(embedJson.html))
  } catch (error) {
    console.log('error')
  }
}
