import React from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'

import './Video.css'

export const Video = ({ smallVid, mediumVid, largeVid, isMobile, isTablet, isDesktop }) => (
  <div className='video__wrapper'>
    <video autoPlay muted loop className='video'>
      {isMobile &&
        <source src={smallVid} type='video/mp4' />
      }
      {isTablet &&
        <source src={mediumVid} type='video/mp4' />
      }
      {isDesktop &&
        <source src={largeVid} type='video/mp4' />
      }
    </video>
  </div>
)

Video.propTypes = {
  smallVid: PropTypes.string,
  mediumVid: PropTypes.string,
  largeVid: PropTypes.string,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
  isDesktop: PropTypes.bool
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 600,
  isTablet: width > 600 && width <= 1050,
  isDesktop: width > 1050
})

export default withSizes(mapSizesToProps)(Video)
