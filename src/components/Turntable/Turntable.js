import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VinylIcon from 'components/VinylIcon'
import TurntableIcon from './TurntableIcon'
import TonearmIcon from './TonearmIcon'

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
        <TurntableIcon />
        <div className='tt__vinyl tt__vinyl--ease'>
          <div className='tt__vinyl--linear'>
            <VinylIcon />
          </div>
        </div>
        <div className='tt__tonearm'>
          <TonearmIcon />
        </div>
      </div>
    )
  }
}

Turntable.propTypes = {
  isPlaying: PropTypes.bool
}

export default Turntable
