import React from 'react'
import PropTypes from 'prop-types'

import './Layout.css'

import Header from 'components/Header'
import Footer from 'components/Footer'
import CloudcastPlayerContainer from 'components/CloudcastPlayerContainer'

export const Layout = ({ children }) => (
  <div>
    <Header />
    <div className='LayoutContainer'>
      {children}
    </div>
    <Footer />
    <CloudcastPlayerContainer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
