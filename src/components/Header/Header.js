import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import wave from './wave.gif'

export const Header = () => (
  <div className='header'>
    <div className='header__inner'>
      <div className='header__placeholder'>
        høme sessiønz
      </div>
      <Link to='/'>
        <img src={wave} className='header__logo' alt='høme sessiønz' />
      </Link>
      <div className='header__menu font--large'>
        <Link to='/about'>abøut</Link>
        <Link to='/contact'>cøntact</Link>
      </div>
    </div>
  </div>
)

export default Header
