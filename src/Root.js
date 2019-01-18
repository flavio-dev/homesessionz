import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import HomeContainer from 'routes/home/HomeContainer'
import CloudcastDetailsContainer from 'routes/cloudcastDetails/CloudcastDetailsContainer'
import Contact from 'routes/contact/Contact'
import About from 'routes/about/About'
import LayoutContainer from 'components/LayoutContainer'
import scrollIntoView from 'hocomponents/ScrollIntoView'

import 'index.css'

export const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LayoutContainer>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/contact' component={scrollIntoView(Contact)} />
          <Route exact path='/about' component={scrollIntoView(About)} />
          <Route exact path='/:cloudcastId' component={scrollIntoView(CloudcastDetailsContainer)} />
        </Switch>
      </LayoutContainer>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object
}

export default Root
