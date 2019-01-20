import React from 'react'
import PropTypes from 'prop-types'

import './Tag.css'

export const Tag = ({ name, style, placeholder, setSearchText }) => (
  <span
    className={placeholder ? 'font--small tag tag--placeholder' : 'font--small tag'}
    style={style}
    onClick={() => setSearchText(name)}
  >
    {name}
  </span>
)

Tag.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.bool,
  setSearchText: PropTypes.func
}

export default Tag
