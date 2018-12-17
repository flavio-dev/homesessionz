import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'components/Logo'

import './Header.css'

export const Header = () => (
  <div className='header'>
    <div className='header__inner'>
      <div className='header__placeholder'>
        høme sessiønz
      </div>
      <Link to='/'>
        <Logo />
      </Link>
      <div className='header__menu font--large'>
        <Link to='/about'>abøut</Link>
        <Link to='/contact'>cøntact</Link>
      </div>
    </div>
  </div>
)

export default Header
