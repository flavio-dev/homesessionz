import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ImagePlayPause from 'components/ImagePlayPause'
import TagContainer from 'components/TagContainer'
import Tag from 'components/TagContainer/Tag'
import TagAll from 'components/TagAll'

import './CloudcastBig.css'

class CloudcastBig extends Component {
  render() {
    const { cloudcast, isPlaying, playingCloudcast, playPauseTrigger} = this.props

    const smallPicUrl = cloudcast.pictures && cloudcast.pictures.extra_large
      ? cloudcast.pictures.extra_large
      : ''

    const largePicUrl = cloudcast.pictures && cloudcast.pictures['1024wx1024h']
      ? cloudcast.pictures['1024wx1024h']
      : ''

    const isPlayingVal = isPlaying && playingCloudcast === cloudcast.url

    return (
      <div>
        <div className='cb__img cb__img--small'>
          <ImagePlayPause
            isPlaying={isPlayingVal}
            pictureUrl={smallPicUrl}
            playPauseTrigger={playPauseTrigger}
            cloudcastKey={cloudcast.slugToKey}
            panoDisplay
          />
        </div>
        <div className='cb__img cb__img--large'>
          <ImagePlayPause
            isPlaying={isPlayingVal}
            pictureUrl={largePicUrl}
            playPauseTrigger={playPauseTrigger}
            cloudcastKey={cloudcast.slugToKey}
            panoDisplay
          >
            <div className='cb__img-title font--medium'>{cloudcast.name}</div>
          </ImagePlayPause>
        </div>
        {cloudcast.tags && cloudcast.tags.length &&
          <div className='cb__tags'>
            {cloudcast.tags.map((tag) => {
              return <Fragment key={tag.key}><TagContainer name={tag.name} /></Fragment>
            })}
            <TagAll tags={cloudcast.tags} cloudcastName={cloudcast.name} />
          </div>
        }
        {(!cloudcast.tags || !cloudcast.tags.length) &&
          <div className='cb__tags'>
            <Tag style={{ width: 75 }} name='&nbsp;' placeholder />
            <Tag style={{ width: 50 }} name='&nbsp;' placeholder />
            <Tag style={{ width: 45 }} name='&nbsp;' placeholder />
            <Tag style={{ width: 60 }} name='&nbsp;' placeholder />
            <Tag style={{ width: 65 }} name='&nbsp;' placeholder />
            <TagAll placeholder />
          </div>
        }
        {cloudcast.name && cloudcast.name.length &&
          <Link to={cloudcast.slug} className='cb__title font--medium'>{cloudcast.name}</Link>
        }
        {(!cloudcast.name || !cloudcast.name.length) &&
          <div className='cb__title-placeholder'>{cloudcast.name}</div>
        }
        {cloudcast.description && cloudcast.description.length &&
          <Link to={cloudcast.slug} className='cb__text'>{cloudcast.description}</Link>
        }
        {(!cloudcast.description || !cloudcast.description.length) &&
          <div className='cb__text-placeholder' />
        }
      </div>
    )
  }
}

CloudcastBig.propTypes = {
  playPauseTrigger: PropTypes.func.isRequired,
  cloudcast: PropTypes.object,
  playingCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default CloudcastBig
