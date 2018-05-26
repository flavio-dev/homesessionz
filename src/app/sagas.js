import { call, put } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'
import getEnvUrlPrefix from 'utils/envUrl'

import { setInitialListMixesFromGithub, setCurrentCloudcast } from './actions'

export function* getInitialListMixesFromGithub() {
  const url = 'https://raw.githubusercontent.com/flavio-dev/homesessionzserver/master/data.json'

  try {
    const list = yield call(whatwgFetch, url)
    yield put(setInitialListMixesFromGithub(list))
  } catch (error) {
    console.log('error')
  }
}

export function* getExample() {
  const prefixUrl = getEnvUrlPrefix()
  const url = prefixUrl + '/cloudcast/NetilRadio/s%C3%B8unds-fl%C3%B8ating-ar%C3%B8und-apr182-by-this-is-a-pr%C3%B8ject-21st-april-2018/embed-json' // eslint-disable-line
  try {
    const embedJson = yield call(whatwgFetch, url)
    console.log('example =D  =  ', embedJson)
    yield put(setCurrentCloudcast(embedJson.html))
  } catch (error) {
    console.log('error')
  }
}
