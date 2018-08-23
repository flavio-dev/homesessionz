import React from 'react'

import './Footer.css'

import InstaIcon from 'components/InstaIcon'
import HeartIcon from 'components/HeartIcon'

export const Footer = () => (
  <div className='footer'>
    <div className='footer__inner'>
      <a href='https://www.instagram.com/homesessionz/' target='_blank'><InstaIcon /></a>
      <div className='footer__text'>
        <div>
          made with <HeartIcon /> by <a href='https://github.com/flavio-dev'>flaviø</a>
        </div>
        <div>copyrights 2018</div>
      </div>
    </div>
  </div>
)

export default Footer
