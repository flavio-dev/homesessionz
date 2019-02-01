import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import MoreTagIcon from './MoreTagIcon'
import TagContainer from 'components/TagContainer'

import './TagAll.css'

class TagAll extends Component {
  showMoreTags = () => {
    const Msg = () => (<div>
      <div><strong>"{this.props.cloudcastName}"</strong> includes music sounding like:</div>
      <div className='tags-wrapper'>
        {this.props.tags.map((tag) => (
          <Fragment key={tag.key}><TagContainer name={tag.name} /></Fragment>
        ))}
      </div>
    </div>)
    toast.success(<Msg />)
  }

  render() {
    const classTa = this.props.placeholder ? 'ta ta__tag--placeholder' : 'ta'
    return <div className={classTa}>
      <span
        className='ta__tag'
        onClick={this.showMoreTags}
      >
        <MoreTagIcon />
      </span>
    </div>
  }
}

TagAll.propTypes = {
  tags: PropTypes.array,
  cloudcastName: PropTypes.string,
  placeholder: PropTypes.bool
}

export default TagAll
