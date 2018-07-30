import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import wave from './wave.gif'

export const Header = () => (
  <div className='Header'>
    <div className='HeaderInner'>
      <div className='HeaderPlaceholder'>
        høme sessiønz
      </div>
      <Link to='/'>
        <img src={wave} className='HeaderLogo' alt='høme sessiønz' />
      </Link>
      <div className='HeaderMenu font--large'>
        <Link to='/about'>abøut</Link>
        <Link to='/contact'>cøntact</Link>
      </div>
    </div>
  </div>
)

export default Header
