import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MoreTagIcon from './MoreTagIcon'

import './TagAll.css'

class TagAll extends Component {
  render() {
    return <div className='ta'>
      <span
        className='ta__tag'
        onClick={() => console.log('KCOADPOCA')}
      >
        <MoreTagIcon />
      </span>
    </div>
  }
}

TagAll.propTypes = {
  tags: PropTypes.array
}

export default TagAll
