import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import MoreTagIcon from 'components/TagAll/MoreTagIcon'
import TagContainer from 'components/TagContainer'

import '../Msgs.css'

export const MsgTags = ({ cloudcastName, tags }) => (
  <div className='msg'>
    <div className='msg__icon'><MoreTagIcon /></div>
    <div className='msg__texts'>
      <div>all the tags for <strong>{cloudcastName}</strong>:</div>
      <div className='tags-wrapper'>
        {tags.map((tag) => (
          <Fragment key={tag.key}><TagContainer name={tag.name} /></Fragment>
        ))}
      </div>
    </div>
  </div>
)

MsgTags.propTypes = {
  cloudcastName: PropTypes.string,
  tags: PropTypes.array
}

export default MsgTags
