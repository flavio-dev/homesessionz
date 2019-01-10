import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PlayPauseIcon from 'components/PlayPauseIcon'

import './ImagePlayPause.css'

class ImagePlayPause extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasLoaded: false
    }

    this.timeout = null
  }

  showImageWithDelay = () => {
    // delaying the showing of the image
    this.timeout = setTimeout(() => {
      this.setState({ hasLoaded: true })
    }, 500)
  }

  componentWillUnmount() {
    // in case we unmount and the setState still happening
    clearTimeout(this.timeout)
  }

  render() {
    const { isPlaying, pictureUrl, panoDisplay, playPauseTrigger, children } = this.props
    let classCloudcastImg = panoDisplay ? 'ipp__img ipp__img--pano' : 'ipp__img'
    if (isPlaying) {
      classCloudcastImg = classCloudcastImg + ' ipp__img--playing'
    }

    if (this.state.hasLoaded) {
      classCloudcastImg = classCloudcastImg + ' ipp__img--has-loaded'
    } else if (pictureUrl && pictureUrl.length) {
      this.showImageWithDelay()
    }

    return (
      <div className='ipp'>
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
