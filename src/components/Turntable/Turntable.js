import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VinylIcon from 'components/VinylIcon'

import turntable from './images/turntable.png'
import tonearm from './images/tonearm.png'

import './Turntable.css'

class Turntable extends Component {
  constructor(props) {
    super()

    this.state = {
      localHasBeenPlayed: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isPlaying) {
      return { localHasBeenPlayed: true }
    }
    return state
  }

  render() {
    let classVar = 'tt'
    if (this.props.isPlaying === true) {
      classVar = classVar + ' tt--playing'
    } else if (this.state.localHasBeenPlayed && this.props.isPlaying === false) {
      classVar = classVar + ' tt--stopping'
    }

    return (
      <div className={classVar}>
        <img src={turntable} className='tt__turntable' />
        <img src={tonearm} className='tt__tonearm' />
        <div className='tt__vinyl tt__vinyl--ease'>
          <div className='tt__vinyl--linear'>
            <VinylIcon />
          </div>
        </div>
      </div>
    )
  }
}

Turntable.propTypes = {
  isPlaying: PropTypes.bool
}

export default Turntable
