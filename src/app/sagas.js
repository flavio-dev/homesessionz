import { fork, put, call, takeLatest, select } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'
import getEnvUrlPrefix from 'utils/envUrl'

import {
  setCloudcastDetails,
  setIndexIsFeaturedCloudcast,
  setIsFeaturedCloudcast,
  SET_SEARCH_TEXT
} from './actions'

import { getCloudcastDetails } from './selectors'

export function* getInitialListMixesFromGithub() {
  const initialListOfMixes = yield call(
    whatwgFetch,
    'https://raw.githubusercontent.com/flavio-dev/homesessionzserver/master/data.json'
  )
  var dateObj = new Date()
  var day = dateObj.getDate()
  const indexFeatured = ((initialListOfMixes.length + day) % (initialListOfMixes.length - 1)) + 1
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

function* proceedSearch(action) {
  let listOfCloudcastsByTag = []
  let listOfCloudcastsByName = []
  const searchText = action.text.toLowerCase()
  console.log('searchText = ', searchText)
  const cloucasts = yield select(getCloudcastDetails)
  for (let key in cloucasts) {
    // check for the tags
    const tags = cloucasts[key].tags
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].name.toLowerCase().includes(searchText)) {
        listOfCloudcastsByTag.push(cloucasts[key])
        break
      }
    }

    // check for the name
    if (cloucasts[key].name.toLowerCase().includes(searchText)) {
      listOfCloudcastsByName.push(cloucasts[key])
    }
  }

  console.log('listOfCloudcastsByTag = ', listOfCloudcastsByTag)
  console.log('listOfCloudcastsByName = ', listOfCloudcastsByName)
}

export function* watchProceedSearch() {
  yield takeLatest(SET_SEARCH_TEXT, proceedSearch)
}
