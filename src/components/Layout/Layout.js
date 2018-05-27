import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import CloudcastPlayerContainer from 'components/CloudcastPlayerContainer'

export const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <CloudcastPlayerContainer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
