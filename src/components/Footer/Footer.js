import React from 'react'

import './Footer.css'

import InstaIcon from 'components/InstaIcon'
import HeartIcon from 'components/HeartIcon'

export const Footer = () => (
  <div className='Footer'>
    <div className='FooterInner'>
      <div className='FooterSocial'>
        <div>made with <HeartIcon /> by <a href='https://github.com/flavio-dev'>flaviø</a></div>
        <InstaIcon />
      </div>
      <div className='FooterCopyrights'>copyrights 2018</div>
    </div>
  </div>
)

export default Footer
