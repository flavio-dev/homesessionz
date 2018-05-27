import { call, put, race, take, select } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'
import slugToKey from 'utils/slugToKey'
import getEnvUrlPrefix from 'utils/envUrl'
import initialListOfMixes from 'data.json'

import {
  setInitialListMixesFromGithub,
  setCurrentCloudcastEmbed,
  setCloudcastEmbedDetails,
  setCloudcastDetails,
  SET_LIST_MIXES_GITHUB,
  GET_CURRENT_CLOUDCAST_EMBED,
  SET_CLOUDCAST_DETAILS
} from './actions'

import { getCloudcastDetails } from './selectors'

export function* getInitialListMixesFromGithub() {
  yield put(setInitialListMixesFromGithub(initialListOfMixes))
}

function* getCloudcastDetailsCall(cloudcastKey) {
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
      for (let i = 0; i < initial.listMixes.length; i++) {
        yield call(getCloudcastDetailsCall, initial.listMixes[i])
      }
    }

    if (specific) {
      console.log('Hello we are in specific')
    }
  }
}

function* getEmbedHtml(key, slug) {
  const keyFromSlug = slugToKey(slug)
  const cloudcastsInStore = yield select(getCloudcastDetails)
  if (cloudcastsInStore[keyFromSlug] && cloudcastsInStore[keyFromSlug].embedHtml) {
    yield put(setCurrentCloudcastEmbed(cloudcastsInStore[keyFromSlug].embedHtml))
  } else {
    const prefixUrl = getEnvUrlPrefix()
    const url = prefixUrl + '/cloudcast' + key + 'embed-json'
    try {
      const embedJson = yield call(whatwgFetch, url)
      let tempStr = embedJson.html
      const embedHtml = [tempStr.slice(0, embedJson.html.indexOf('light=1')), 'autoplay=1&amp;', tempStr.slice(embedJson.html.indexOf('light=1'))].join('') // eslint-disable-line
      yield put(setCurrentCloudcastEmbed(embedHtml))
      yield put(setCloudcastEmbedDetails(embedHtml, keyFromSlug))
    } catch (error) {
      console.log('error')
    }
  }
}

export function * watchGetEmbedHtml() {
  while (true) {
    const payload = yield take(GET_CURRENT_CLOUDCAST_EMBED)
    yield call(getEmbedHtml, payload.key, payload.slug)
  }
}
