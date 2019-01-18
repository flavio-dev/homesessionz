import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Video from './Video'

import './VideoWrapper.css'

export const VideoWrapper = ({ smallVid, mediumVid, largeVid, title, children }) => (
  <Fragment>
    <Video
      smallVid={smallVid}
      mediumVid={mediumVid}
      largeVid={largeVid}
    />
    <div className='vw'>
      <h1 className='vw__title'>{title}</h1>
      {children}
    </div>
  </Fragment>
)

VideoWrapper.propTypes = {
  smallVid: PropTypes.string,
  mediumVid: PropTypes.string,
  largeVid: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
}

export default VideoWrapper
