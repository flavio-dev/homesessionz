import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ImagePlayPause from 'components/ImagePlayPause'
import Tag from 'components/Tag'

import './CloudcastBig.css'

class CloudcastBig extends Component {
  render() {
    const smallPicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures.extra_large
      ? this.props.cloudcast.pictures.extra_large
      : ''

    const largePicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures['1024wx1024h']
      ? this.props.cloudcast.pictures['1024wx1024h']
      : ''

    const isPlaying = this.props.isPlaying && this.props.playingCloudcast === this.props.cloudcast.url

    return (
      <div>
        <div className='cb__img cb__img--small'>
          <ImagePlayPause
            isPlaying={isPlaying}
            pictureUrl={smallPicUrl}
            playPauseTrigger={this.props.playPauseTrigger}
            panoDisplay
          />
        </div>
        <div className='cb__img cb__img--large'>
          <ImagePlayPause
            isPlaying={isPlaying}
            pictureUrl={largePicUrl}
            playPauseTrigger={this.props.playPauseTrigger}
            panoDisplay
          >
            <div className='cb__img-title font--medium'>{this.props.cloudcast.name}</div>
          </ImagePlayPause>
        </div>
        {this.props.cloudcast.tags && this.props.cloudcast.tags.length &&
          <div className='cb__tags'>
            {this.props.cloudcast.tags.map((tag) => {
              return <Fragment key={tag.key}><Tag name={tag.name} /></Fragment>
            })}
          </div>
        }
        {(!this.props.cloudcast.tags || !this.props.cloudcast.tags.length) &&
          <div className='cb__tags'>
            <Tag style={{ width: 75 }} name='&nbsp;' />
            <Tag style={{ width: 50 }} name='&nbsp;' />
            <Tag style={{ width: 45 }} name='&nbsp;' />
            <Tag style={{ width: 60 }} name='&nbsp;' />
            <Tag style={{ width: 65 }} name='&nbsp;' />
          </div>
        }
        {this.props.cloudcast.name && this.props.cloudcast.name.length &&
          <Link to={this.props.cloudcast.slug} className='cb__title font--medium'>{this.props.cloudcast.name}</Link>
        }
        {(!this.props.cloudcast.name || !this.props.cloudcast.name.length) &&
          <div className='cb__title-placeholder'>{this.props.cloudcast.name}</div>
        }
        {this.props.cloudcast.description && this.props.cloudcast.description.length &&
          <Link to={this.props.cloudcast.slug} className='cb__text'>{this.props.cloudcast.description}</Link>
        }
        {(!this.props.cloudcast.description || !this.props.cloudcast.description.length) &&
          <div className='cb__text-placeholder' />
        }
      </div>
    )
  }
}

CloudcastBig.propTypes = {
  setPlayingCloudcast: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  playPauseTrigger: PropTypes.func.isRequired,
  cloudcast: PropTypes.object,
  playingCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default CloudcastBig
