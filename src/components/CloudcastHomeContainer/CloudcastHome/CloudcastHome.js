
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ImagePlayPause from 'components/ImagePlayPause'
import Tag from 'components/TagContainer/Tag'
import TagContainer from 'components/TagContainer'
import TagAll from 'components/TagAll'

import './CloudcastHome.css'

class CloudcastHome extends Component {
  render() {
    const { forceMobileView, cloudcast, isPlaying, playingCloudcast, playPauseTrigger } = this.props
    const largePicUrl = cloudcast.pictures && cloudcast.pictures.large
      ? cloudcast.pictures.large
      : ''
    const smallPicUrl = cloudcast.pictures && cloudcast.pictures.medium_mobile
      ? cloudcast.pictures.medium_mobile
      : ''

    const isCloudcastPlaying = isPlaying && playingCloudcast === cloudcast.url
    const mobileViewClass = forceMobileView ? 'ch--force-mobile-view' : ''

    return (
      <div className={'ch ' + mobileViewClass}>
        <div className='ch__img ch__img--small'>
          <ImagePlayPause
            isPlaying={isCloudcastPlaying}
            pictureUrl={smallPicUrl}
            playPauseTrigger={playPauseTrigger}
          />
        </div>
        <div className='ch__img ch__img--large'>
          <ImagePlayPause
            isPlaying={isCloudcastPlaying}
            pictureUrl={largePicUrl}
            playPauseTrigger={playPauseTrigger}
          />
        </div>
        <div className='ch__details'>
          {cloudcast.tags && cloudcast.tags.length &&
            <div className='ch__tags'>
              {cloudcast.tags.map((tag) => (
                <Fragment key={tag.key}><TagContainer name={tag.name} /></Fragment>
              ))}
              <TagAll
                tags={cloudcast.tags}
                cloudcastName={cloudcast.name}
              />
            </div>
          }
          {(!cloudcast.tags || !cloudcast.tags.length) &&
            <div className='ch__tags'>
              <Tag style={{ width: 75 }} name='&nbsp;' />
              <Tag style={{ width: 50 }} name='&nbsp;' />
            </div>
          }
          {cloudcast.name && cloudcast.name.length &&
            <Link to={cloudcast.slug} className='ch__text'>{cloudcast.name}</Link>
          }
          {(!cloudcast.name || !cloudcast.name.length) &&
            <div className='ch__text-placeholder' />
          }
        </div>
      </div>
    )
  }
}

CloudcastHome.defaultProps = {
  cloudcast: {
    pictures: {
      large: ''
    },
    name: ''
  }
}

CloudcastHome.propTypes = {
  setPlayingCloudcast: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  cloudcast: PropTypes.object,
  playingCloudcast: PropTypes.string,
  playPauseTrigger: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  forceMobileView: PropTypes.bool
}

export default CloudcastHome
