import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './ImagePano.css'

export const ImagePano = ({urlSmall, urlLarge, children}) => {
  return (
    <Fragment>
      <div className='ip--large'>
        <div
          style={{
            backgroundImage: 'url(' + urlLarge || '' + ')'
          }}
          className='ip'
        >
          <div className='ip__content'>{children}</div>
        </div>
      </div>
      <div className='ip--small'>
        <div
          style={{
            backgroundImage: 'url(' + urlSmall || '' + ')'
          }}
          className='ip'
        >
          <div className='ip__content'>{children}</div>
        </div>
      </div>
    </Fragment>
  )
}

ImagePano.propTypes = {
  urlSmall: PropTypes.string.isRequired,
  urlLarge: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default ImagePano
