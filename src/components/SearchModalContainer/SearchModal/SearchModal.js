import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CloudcastHomeContainer from 'components/CloudcastHomeContainer'

import './SearchModal.css'

class SearchModal extends Component {
  render() {
    const { searchText, searchResultsInTags } = this.props
    const showResultClass = searchText.length ? 'sm--visible' : ''
    return (
      <div className={'sm ' + showResultClass}>
        <section className='sm__inner'>
          <h2>results for {searchText}...</h2>
          <div className='sm__results'>
            <div>
              <h3>... in tags</h3>
              <div>
                {searchResultsInTags.map((result) => {
                  return <CloudcastHomeContainer cloudcast={result} key={result.key} forceMobileView />
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

SearchModal.propTypes = {
  searchText: PropTypes.string,
  searchResultsInTags: PropTypes.array
}

export default SearchModal
