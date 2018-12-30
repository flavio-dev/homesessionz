import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PlayPauseIcon from 'components/PlayPauseIcon'

import './ImagePlayPause.css'

class ImagePlayPause extends Component {
  render() {
    const { isPlaying, pictureUrl, panoDisplay, playPauseTrigger, children } = this.props
    let classCloudcastImg = panoDisplay ? 'ipp__img ipp__img--pano' : 'ipp__img'
    if (isPlaying) {
      classCloudcastImg = classCloudcastImg + ' ipp__img--playing'
    }

    return (
      <div
        style={{
          backgroundImage: 'url(' + pictureUrl + ')',
          backgroundSize: 'cover'
        }}
        className={classCloudcastImg}
        onClick={playPauseTrigger}
      >
        <div className='ipp__play-button'>
          <PlayPauseIcon isPlaying={isPlaying} />
        </div>
        {children}
      </div>
    )
  }
}

ImagePlayPause.propTypes = {
  playPauseTrigger: PropTypes.func,
  pictureUrl: PropTypes.string,
  isPlaying: PropTypes.bool,
  panoDisplay: PropTypes.bool,
  children: PropTypes.node
}

export default ImagePlayPause
