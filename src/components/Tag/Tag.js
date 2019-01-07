import React from 'react'
import PropTypes from 'prop-types'

import './Tag.css'

export const Tag = ({ name, style }) => (
  <span className='font--small tag' style={style}>{name}</span>
)

Tag.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string
}

export default Tag
