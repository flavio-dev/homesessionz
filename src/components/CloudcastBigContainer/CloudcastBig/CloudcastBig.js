import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import PlayIcon from 'components/PlayIcon'
import PauseIcon from 'components/PauseIcon'
import Tag from 'components/Tag'

import './CloudcastBig.css'

class CloudcastBig extends Component {
  constructor(props) {
    super()

    this.playPauseTrigger = this.playPauseTrigger.bind(this)
  }

  playPauseTrigger() {
    if (this.props.cloudcast.url) {
      if (this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
        // the current player playing is this one. so we pause.
        this.props.setIsPlaying(false)
      } else if (!this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
        // the current player not playing. so we play.
        this.props.setIsPlaying(true)
      } else {
        // another cloudcast is being played. we load this one and play
        this.props.setCurrentCloudcast(this.props.cloudcast.url)
        this.props.setIsPlaying(true)
      }
    }
  }

  render() {
    const smallPicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures['320wx320h']
      ? this.props.cloudcast.pictures['320wx320h']
      : ''

    const largePicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures['640wx640h']
      ? this.props.cloudcast.pictures['640wx640h']
      : ''

    let PlayPauseButton = <PlayIcon />
    let classCloudcastImgSmall = 'cb__img-small'
    let classCloudcastImgBig = 'cb__img-big'
    if (this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
      classCloudcastImgSmall = classCloudcastImgSmall + ' cb__img-playing'
      classCloudcastImgBig = classCloudcastImgBig + ' cb__img-playing'
      PlayPauseButton = <PauseIcon />
    }

    return (
      <div className='cb'>
        <div
          style={{
            backgroundImage: 'url(' + smallPicUrl + ')'
          }}
          className={classCloudcastImgSmall}
          onClick={this.playPauseTrigger}
        >
          <div className='cb__play-button'>
            {PlayPauseButton}
          </div>
          <div className='cb__img-title font--medium'>{this.props.cloudcast.name}</div>
        </div>
        <div
          style={{
            backgroundImage: 'url(' + largePicUrl + ')'
          }}
          className={classCloudcastImgBig}
          onClick={this.playPauseTrigger}
        >
          <div className='cb__play-button'>
            {PlayPauseButton}
          </div>
          <div className='cb__img-title font--medium'>{this.props.cloudcast.name}</div>
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
            <Tag style={{width: 75}} name='&nbsp;' />
            <Tag style={{width: 50}} name='&nbsp;' />
            <Tag style={{width: 45}} name='&nbsp;' />
            <Tag style={{width: 60}} name='&nbsp;' />
            <Tag style={{width: 65}} name='&nbsp;' />
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
  setCurrentCloudcast: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  cloudcast: PropTypes.object,
  currentCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default CloudcastBig
