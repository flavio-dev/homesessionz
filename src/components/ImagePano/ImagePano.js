import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ImagePano.css'

class ImagePano extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasLoaded: false
    }
  }

  showImageWithDelay = () => {
    // delaying the showing of the image
    setTimeout(() => {
      this.setState({ hasLoaded: true })
    }, 500)
  }

  render() {
    const { urlLarge, urlSmall, children } = this.props
    let classIp = 'ip'
    if (this.state.hasLoaded) {
      classIp = classIp + ' ip--has-loaded'
    } else if (urlLarge && urlLarge.length) {
      this.showImageWithDelay()
    }

    return (
      <div className={classIp}>
        <div className='ip--large'>
          <div
            style={{
              backgroundImage: 'url(' + urlLarge || '' + ')'
            }}
            className='ip__img'
          >
            <div className='ip__content'>{children}</div>
          </div>
        </div>
        <div className='ip--small'>
          <div
            style={{
              backgroundImage: 'url(' + urlSmall || '' + ')'
            }}
            className='ip__img'
          >
            <div className='ip__content'>{children}</div>
          </div>
        </div>
      </div>
    )
  }
}

ImagePano.propTypes = {
  urlSmall: PropTypes.string,
  urlLarge: PropTypes.string,
  children: PropTypes.node
}

export default ImagePano
