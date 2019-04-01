import React from 'react'
import VinylIcon from 'components/VinylIcon'

import './LoadingScreen.css'

export const LoadingScreen = () => (
  <div className='ls'>
    <div className='ls__content'>
      <div className='ls__icon'><VinylIcon /></div>
      <p />
      <p className='ls__text font--medium'>loading...</p>
    </div>
  </div>
)

export default LoadingScreen
