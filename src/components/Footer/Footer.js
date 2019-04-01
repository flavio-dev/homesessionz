import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

import InstaIcon from 'components/InstaIcon'
import MixcloudIcon from 'components/MixcloudIcon'
import SoundcloudIcon from 'components/SoundcloudIcon'
import HeartIcon from 'components/HeartIcon'

export const Footer = () => (
  <div className='footer'>
    <div className='footer__inner'>
      <div className='footer__inner__top-line'>
        <div className='footer__links'>
          <Link to='/about'>abøut</Link>
          <Link to='/contact'>cøntact</Link>
        </div>
        <div className='footer__icons'>
          <a href='https://www.instagram.com/homesessionz/'
            target='_blank'
            rel='noopener noreferrer'>
            <InstaIcon />
          </a>
          <a href='https://www.mixcloud.com/homesessionz/'
            target='_blank'
            rel='noopener noreferrer'>
            <MixcloudIcon />
          </a>
          <a href='https://www.soundcloud.com/homesessionz/'
            target='_blank'
            rel='noopener noreferrer'>
            <SoundcloudIcon />
          </a>
        </div>
      </div>
      <div className='footer__text'>
        <div className='footer__text__flavio'>
          made with <HeartIcon /> by <a href='https://github.com/flavio-dev'>flaviø</a>
        </div>
        <div>copyrights 2019</div>
      </div>
    </div>
  </div>
)

export default Footer
