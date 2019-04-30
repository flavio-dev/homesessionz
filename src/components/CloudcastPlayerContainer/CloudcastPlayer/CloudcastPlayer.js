import React, { Component, Fragment } from 'react'
// import MixcloudPlayer from 'react-player/lib/players/Mixcloud'
import PropTypes from 'prop-types'
import Script from 'react-load-script'

import './CloudcastPlayer.css'

class CloudcastPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scriptLoaded: false,
      scriptError: false,
      hasLoaded: false,
      isReady: false
    }

    this.ref = iframe => {
      this.iframe = iframe
    }

    window.__player = null
  }

  static getDerivedStateFromProps(props, state) {
    if (state.isReady && props.playingCloudcast.length > 0) {
      console.log('lets load it');
      window.__player.load('/NetilRadio/s%C3%B8unds-fl%C3%B8ating-ar%C3%B8und-jan18-by-this-is-a-pr%C3%B8ject/', true).then(() => {
        console.log('has it loaded??????');
        window.__player.play()
      })
      // window.__player.play()
    }
    return state
  }

  handleScriptCreate = () => {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError = () => {
    this.setState({ scriptError: true })
  }

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true })
    console.log('this.iframe = ', this.iframe)
    window.__player = window.Mixcloud.PlayerWidget(this.iframe)
    console.log('handleScriptLoad')
    console.log('window.__player = ', window.__player)

    window.__player.ready.then(() => {
      console.log('ready!?');
      window.__player.events.play.on(this.onPlay)
      window.__player.events.pause.on(this.onPause)
      this.setState({isReady: true})
    })
    console.log('BLABLABLABLA')
  }

  onPlay = () => {
    console.log('onPlay')
    // if (!this.props.isPlaying) {
    //   this.props.setIsPlaying(true)
    // }
  }

  onPause = () => {
    console.log('onPause')
    // if (this.props.isPlaying) {
    //   this.props.setIsPlaying(false)
    // }
  }

  queryString = (object) => {
    return Object
      .keys(object)
      .map(key => `${key}=${object[key]}`)
      .join('&')
  }

  render() {
    const MATCH_URL = /mixcloud\.com\/([^/]+\/[^/]+)/
    const id = (this.props.playingCloudcast.match(MATCH_URL) && this.props.playingCloudcast.match(MATCH_URL)[1]) || ''

    const query = this.queryString({
      mini: true,
      feed: `/${id}/`
    })
    console.log('query = ', query);

    return <Fragment>
      <div className='cp'>
        <iframe
          title='test'
          key={'test'}
          ref={this.ref}
          style={{
            width: '100%',
            height: 60
          }}
          frameBorder='0'
          src={`https://www.mixcloud.com/widget/iframe/?${query}`}
        />
      </div>
      <Script
        url="//widget.mixcloud.com/media/js/widgetApi.js"
        onCreate={this.handleScriptCreate}
        onError={this.handleScriptError}
        onLoad={this.handleScriptLoad}
      />
    </Fragment>
  }
}

CloudcastPlayer.propTypes = {
  setIsPlaying: PropTypes.func,
  setHasCloudLoaded: PropTypes.func,
  playingCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired
}

export default CloudcastPlayer
