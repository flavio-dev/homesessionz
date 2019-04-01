import React from 'react'
import VinylIcon from 'components/VinylIcon'

import './LoadingScreen.css'

export const LoadingScreen = () => (
  <div className='ls'>
    <div className='ls__content'>
      <p className='ls__icon'><VinylIcon /></p>
      <p className='ls__text font--medium'>loading...</p>
    </div>
  </div>
)

export default LoadingScreen
