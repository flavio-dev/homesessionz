import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import MoreTagIcon from './MoreTagIcon'
import Msgtags from 'components/Msgs/MsgTags'

import './TagAll.css'

class TagAll extends Component {
  showMoreTags = () => {
    toast.success(<Msgtags cloudcastName={this.props.cloudcastName} tags={this.props.tags} />)
  }

  render() {
    const classTa = this.props.placeholder ? 'ta ta__tag--placeholder' : 'ta'
    return <div className={classTa}>
      <span
        className='ta__tag button-style'
        onClick={this.showMoreTags}
      >
        <div className='ta__tag__icon'><MoreTagIcon /></div>
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
