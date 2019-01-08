import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './SearchModal.css'

class SearchModal extends Component {
  render() {
    const showResultClass = this.props.searchText.length ? 'sm--visible' : ''
    return (
      <div className={'sm ' + showResultClass}>
        <section className='sm__inner'>
          <h2>results for {this.props.searchText}...</h2>
          <div className='sm__results'>
            <div>
              <h3>... in tags</h3>
              <div>
                acodoi
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

SearchModal.propTypes = {
  searchText: PropTypes.string
}

export default SearchModal
