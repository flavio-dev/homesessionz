import React from 'react'
import PropTypes from 'prop-types'

import './Layout.css'

import Header from 'components/Header'
import Footer from 'components/Footer'
import CloudcastPlayerContainer from 'components/CloudcastPlayerContainer'
import SearchModalContainer from 'components/SearchModalContainer'

export const Layout = ({ children, hasSearchText }) => (
  <div>
    <SearchModalContainer />
    <Header />
    <div className={hasSearchText ? 'layout layout--fixed' : 'layout'}>
      {children}
    </div>
    <Footer />
    <CloudcastPlayerContainer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
  hasSearchText: PropTypes.bool
}

export default Layout
