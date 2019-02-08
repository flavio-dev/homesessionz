import React from 'react'
import { fork, put, call, takeLatest, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import whatwgFetch from 'utils/fetch'
import getEnvUrlPrefix from 'utils/envUrl'

import MsgError from 'components/Msgs/MsgError'

import {
  setCloudcastDetails,
  setIndexIsFeaturedCloudcast,
  setIsFeaturedCloudcast,
  setSearchResultsInName,
  setSearchResultsInTags,
  SET_SEARCH_TEXT
} from './actions'

import { getCloudcastDetails } from './selectors'

export function* getInitialListMixesFromGithub() {
  try {
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
  } catch(e) {
    toast.error(<MsgError text='failing to retrieve the list of sessionz' />, {
      className: 'toast--error'
    })
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
  } catch (e) {
    toast.error(<MsgError text='error retrieving the sessionz' />, {
      className: 'toast--error'
    })
  }
}

function* proceedSearch(action) {
  let listOfCloudcastsByTags = []
  let listOfCloudcastsByName = []
  const searchText = action.text.toLowerCase()
  const cloucasts = yield select(getCloudcastDetails)
  for (let key in cloucasts) {
    // check for the tags
    const tags = cloucasts[key].tags || []
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].name.toLowerCase().includes(searchText)) {
        listOfCloudcastsByTags.push(cloucasts[key])
        break
      }
    }

    // check for the name
    if (cloucasts[key].name.toLowerCase().includes(searchText)) {
      listOfCloudcastsByName.push(cloucasts[key])
    }
  }

  yield put(setSearchResultsInTags(listOfCloudcastsByTags))
  yield put(setSearchResultsInName(listOfCloudcastsByName))
}

export function* watchProceedSearch() {
  yield takeLatest(SET_SEARCH_TEXT, proceedSearch)
}
