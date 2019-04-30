import loadScript from 'load-script'
import merge from 'deepmerge'

import { DEPRECATED_CONFIG_PROPS } from './props'

const MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/
const MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/
const MATCH_START_STAMP = /(\d+)(h|m|s)/g
const MATCH_NUMERIC = /^\d+$/

export function queryString (object) {
  return Object
    .keys(object)
    .map(key => `${key}=${object[key]}`)
    .join('&')
}

// Util function to load an external SDK
// or return the SDK if it is already loaded
const resolves = {}
export function getSDK (url, sdkGlobal, sdkReady = null, isLoaded = () => true, fetchScript = loadScript) {
  if (window[sdkGlobal] && isLoaded(window[sdkGlobal])) {
    return Promise.resolve(window[sdkGlobal])
  }
  return new Promise((resolve, reject) => {
    // If we are already loading the SDK, add the resolve
    // function to the existing array of resolve functions
    if (resolves[url]) {
      resolves[url].push(resolve)
      return
    }
    resolves[url] = [resolve]
    const onLoaded = sdk => {
      // When loaded, resolve all pending promises
      resolves[url].forEach(resolve => resolve(sdk))
    }
    if (sdkReady) {
      const previousOnReady = window[sdkReady]
      window[sdkReady] = function () {
        if (previousOnReady) previousOnReady()
        onLoaded(window[sdkGlobal])
      }
    }
    fetchScript(url, err => {
      if (err) reject(err)
      if (!sdkReady) {
        onLoaded(window[sdkGlobal])
      }
    })
  })
}

export function callPlayer (method, ...args) {
  // Util method for calling a method on this.player
  // but guard against errors and console.warn instead
  if (!this.player || !this.player[method]) {
    let message = `ReactPlayer: ${this.constructor.displayName} player could not call %c${method}%c – `
    if (!this.player) {
      message += 'The player was not available'
    } else if (!this.player[method]) {
      message += 'The method was not available'
    }
    console.warn(message, 'font-weight: bold', '')
    return null
  }
  return this.player[method](...args)
}
