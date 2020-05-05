import React from 'react'
import PropTypes from 'prop-types'

import './Tag.css'

export const Tag = ({ name, style, placeholder, setSearchText }) => {
  const newName = name.replace(/^#/, '');
  return <span
    className={placeholder ? 'font--small tag tag--placeholder button-style' : 'font--small tag button-style'}
    style={style}
    onClick={() => setSearchText(newName)}
  >
    {newName}
  </span>
}

Tag.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.bool,
  setSearchText: PropTypes.func
}

export default Tag
