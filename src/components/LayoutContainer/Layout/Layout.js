import React from 'react'
import PropTypes from 'prop-types'

import './Layout.css'

import Header from 'components/Header'
import FooterContainer from 'components/FooterContainer'
import CloudcastPlayerContainer from 'components/CloudcastPlayerContainer'
import SearchModalContainer from 'components/SearchModalContainer'

export const Layout = ({ children, hasSearchText }) => (
  <div style={{ position: 'relative' }}>
    <SearchModalContainer />
    <Header />
    <div className={hasSearchText ? 'layout layout--fixed' : 'layout'}>
      {children}
    </div>
    <FooterContainer />
    <CloudcastPlayerContainer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
  hasSearchText: PropTypes.bool
}

export default Layout
