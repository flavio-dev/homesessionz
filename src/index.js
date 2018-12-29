import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import Root from './Root'
import createStore from './store'

const initialState = window.___INITIAL_STATE__
const history = createHistory()
const store = createStore(initialState, history)

// ========================================================
// Developer Tools Setup
// ========================================================
if (window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === 'development') {
  window.__REDUX_DEVTOOLS_EXTENSION__.open()
} else {
  window.__REDUX_DEVTOOLS_EXTENSION__ = null
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <Root
      store={store}
      history={history}
    />,
    MOUNT_NODE
  )
}

// ========================================================
// Go!
// ========================================================
render()
