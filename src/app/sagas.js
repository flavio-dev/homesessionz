import { fork, put, call } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'
import getEnvUrlPrefix from 'utils/envUrl'

// TEST data
// import listMixes from 'temp/data.json'
// import mixDetails0 from 'temp/offlinedata0.json'
// import mixDetails1 from 'temp/offlinedata1.json'
// import mixDetails2 from 'temp/offlinedata2.json'
// import mixDetails3 from 'temp/offlinedata3.json'
// import mixDetails4 from 'temp/offlinedata4.json'
// import mixDetails5 from 'temp/offlinedata5.json'
// import mixDetails6 from 'temp/offlinedata6.json'
// END TEST data

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
  // const initialListOfMixes = listMixes
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
    // let cloudDetails
    // switch (index) {
    //   case 0:
    //     cloudDetails = mixDetails0
    //     break
    //   case 1:
    //     cloudDetails = mixDetails1
    //     break
    //   case 2:
    //     cloudDetails = mixDetails2
    //     break
    //   case 3:
    //     cloudDetails = mixDetails3
    //     break
    //   case 4:
    //     cloudDetails = mixDetails4
    //     break
    //   case 5:
    //     cloudDetails = mixDetails5
    //     break
    //   case 6:
    //     cloudDetails = mixDetails6
    //     break
    //   default:
    //     cloudDetails = mixDetails0
    // }

    yield put(setCloudcastDetails(cloudDetails, index))
    if (isFeatured) {
      yield put(setIsFeaturedCloudcast(cloudDetails))
    }
  } catch (error) {
    console.log('error')
  }
}
