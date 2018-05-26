import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import FooterContainer from 'components/FooterContainer'

export const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <FooterContainer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
