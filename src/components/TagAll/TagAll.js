import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import Tag from 'components/TagContainer/Tag'
import MoreTagIcon from './MoreTagIcon'

import './TagAll.css'

class TagAll extends Component {
  render() {
    const listTags = [
      {
        name: 'deep house',
        key: 'deep house'
      },
      {
        name: 'techno',
        key: 'techno'
      },
      {
        name: 'eclectic',
        key: 'eclectic'
      },
      {
        name: 'world',
        key: 'world'
      },
      {
        name: 'jazz',
        key: 'jazz'
      }
    ]

    return <div className='ta'>
      <span
        className='ta__tag'
        onClick={() => console.log('KCOADPOCA')}
      >
        <MoreTagIcon />
      </span>
      <div className='ta__tags'>
        {listTags.map((tag) => (
          <Fragment key={tag.key}><Tag name={tag.name} /></Fragment>
        ))}
      </div>
    </div>
  }
}

TagAll.propTypes = {
  tags: PropTypes.array
}

export default TagAll
