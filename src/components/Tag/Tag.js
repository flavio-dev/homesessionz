import React from 'react'
import PropTypes from 'prop-types'

import './Tag.css'

export const Tag = ({name}) => (
  <span className='font--small tag'>{name}</span>
)

Tag.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string
}

export default Tag
