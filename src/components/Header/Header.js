import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'components/Logo'
import SearchContainer from 'components/SearchContainer'

import './Header.css'

export const Header = () => (
  <div className='header'>
    <div className='header__inner'>
      <div className='header__placeholder'>
        <Link to='/'>
          høme sessiønz
        </Link>
      </div>
      <Link to='/'>
        <Logo />
      </Link>
      <div className='header__search font--large'>
        <SearchContainer />
      </div>
    </div>
  </div>
)

export default Header
