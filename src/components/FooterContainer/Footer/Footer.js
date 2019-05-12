import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Footer.css'

import InstaIcon from 'components/InstaIcon'
import MixcloudIcon from 'components/MixcloudIcon'
import SoundcloudIcon from 'components/SoundcloudIcon'
import HeartIcon from 'components/HeartIcon'

import thisYear from 'utils/thisYear'

export const Footer = ({ hasCloudLoaded }) => (
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
        </div>
      </div>
      <div className={hasCloudLoaded ? 'footer__text footer__text--extra-space' : 'footer__text'}>
        <div className='footer__text__flavio'>
          made with <HeartIcon /> by <a href='https://github.com/flavio-dev'>flaviø</a>
        </div>
        <div>copyrights {thisYear()}</div>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  hasCloudLoaded: PropTypes.bool
}

export default Footer
