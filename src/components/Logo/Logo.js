import React from 'react'

import HIcon from './HIcon'
import SIcon from './SIcon'
import SlashIcon from './SlashIcon'

import './Logo.css'

export const Logo = () => (
  <div className='logo'>
    <SlashIcon />
    <HIcon />
    <SIcon />
  </div>
)

export default Logo
