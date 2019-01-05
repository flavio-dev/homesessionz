import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Linkify from 'react-linkify'

import Turntable from 'components/Turntable'
import ImagePano from 'components/ImagePano'
import PlayPauseIcon from 'components/PlayPauseIcon'
import ImagePlayPause from 'components/ImagePlayPause'
import Tag from 'components/Tag'

import slugToKey from 'utils/slugToKey'
import durationFormater from 'utils/durationFormater'

import './CloudcastDetails.css'

class CloudcastDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCloudcast: {},
      currentCloudcastKey: ''
    }

    if (props.match && props.match.params && props.match.params.cloudcastId) {
      const key = slugToKey(props.match.params.cloudcastId)
      this.state.currentCloudcastKey = key
      if (props.cloudcastDetails[key]) {
        this.state.currentCloudcast = this.props.cloudcastDetails[key]
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match && props.match.params && props.match.params.cloudcastId) {
      const key = slugToKey(props.match.params.cloudcastId)
      if (!state.currentCloudcast.slug &&
          props.cloudcastDetails[key] &&
          key === state.currentCloudcastKey) {
        // if we don't have the currentCloudcast for the current key,
        // we need to set it if returned in props.
        return {...state, currentCloudcast: props.cloudcastDetails[key]}
      } else if (key !== state.currentCloudcastKey && props.cloudcastDetails[key]) {
        // if the current key changed, then we need to pick up the value of new current cloudcast
        return {
          currentCloudcastKey: key,
          currentCloudcast: props.cloudcastDetails[key]
        }
      } else if (key !== state.currentCloudcastKey && !props.cloudcastDetails[key]) {
        // we assume that either the key is not correct, or the props.cloudcastDetails[key]
        // has not been set yet. We clear the state
        return {
          currentCloudcast: {},
          currentCloudcastKey: ''
        }
      }
    }

    return state
  }

  playPauseTrigger = () => {
    const cast = this.state.currentCloudcast
    if (cast.url) {
      if (this.props.isPlaying && this.props.playingCloudcast === cast.url) {
        // the current player playing is this one. so we pause.
        this.props.setIsPlaying(false)
      } else if (!this.props.isPlaying && this.props.playingCloudcast === cast.url) {
        // the current player not playing. so we play.
        this.props.setIsPlaying(true)
      } else {
        // another cloudcast is being played. we load this one and play
        this.props.setPlayingCloudcast(cast.url)
        this.props.setIsPlaying(true)
      }
    }
  }

  render() {
    const cast = this.state.currentCloudcast
    const tags = cast.tags
      ? <div className='cd__top__tags'>
        {cast.tags.map((tag) => (
          <Fragment key={tag.key}><Tag name={tag.name} /></Fragment>
        ))}
      </div>
      : <div className='cd__top__tags'>
        <Tag style={{width: 75}} name='&nbsp;' />
        <Tag style={{width: 50}} name='&nbsp;' />
        <Tag style={{width: 45}} name='&nbsp;' />
        <Tag style={{width: 60}} name='&nbsp;' />
        <Tag style={{width: 65}} name='&nbsp;' />
      </div>
    const isPlaying = this.props.isPlaying && this.props.playingCloudcast === cast.url
    const picture = cast.pictures && cast.pictures['320wx320h']

    return (
      <div>
        <section className='cd__top cd__top--large'>
          <div className='cd__top__wrapper'>
            <div className='cd__top__left'>
              <div className='cd__top__left__title'>
                <div
                  className='cd__top__left__play-pause'
                  onClick={this.playPauseTrigger}
                >
                  <PlayPauseIcon
                    reversed
                    isPlaying={isPlaying}
                  />
                </div>
                {!cast.name && <div className='cd__top__title-placeholder' />}
                <div className='font--large'>{cast.name}</div>
              </div>
              {tags}
            </div>
          </div>
          <div className='cd__top__img'
            style={{
              backgroundImage: 'url(' + picture + ')',
              backgroundSize: 'cover'
            }}
          />
        </section>
        <section className='cd__top cd__top--small'>
          <div className='cd__top__img'>
            <ImagePlayPause
              isPlaying={isPlaying}
              pictureUrl={picture}
              playPauseTrigger={this.playPauseTrigger}
            />
          </div>
          {!cast.name && <div className='cd__top__title cd__top__title-placeholder' />}
          {cast.name && <div className='cd__top__title font--medium'>{cast.name}</div>}
          {tags}
        </section>
        <section>
          <ImagePano
            urlSmall={cast.pictures && cast.pictures['640wx640h']}
            urlLarge={cast.pictures && cast.pictures['1024wx1024h']}
          >
            <Turntable isPlaying={this.props.isPlaying && this.props.playingCloudcast === cast.url} />
          </ImagePano>
        </section>
        <section className='cd__bottom'>
          <h2 className='title-margin'>about the sessiøn</h2>
          <div className='cd__bottom__text'>
            <Linkify>{cast.description}</Linkify>
          </div>
        </section>
        <section className='cd__bottom cd__bottom__duration last'>
          <p>duration of the show: {durationFormater(parseInt(cast.audio_length, 10))}</p>
        </section>
      </div>
    )
  }
}

CloudcastDetails.propTypes = {
  match: PropTypes.object,
  cloudcastDetails: PropTypes.object,
  setPlayingCloudcast: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  playingCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default CloudcastDetails
