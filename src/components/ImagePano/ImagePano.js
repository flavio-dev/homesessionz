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
    let classIpImg = 'ip__img'
    if (this.state.hasLoaded) {
      classIpImg = classIpImg + ' ip__img--has-loaded'
    } else if (urlLarge && urlLarge.length) {
      this.showImageWithDelay()
    }

    return (
      <div className='ip'>
        <div className='ip--large'>
          <div
            style={{
              backgroundImage: 'url(' + urlLarge || '' + ')'
            }}
            className={classIpImg}
          >
            <div className='ip__content'>{children}</div>
          </div>
        </div>
        <div className='ip--small'>
          <div
            style={{
              backgroundImage: 'url(' + urlSmall || '' + ')'
            }}
            className={classIpImg}
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
