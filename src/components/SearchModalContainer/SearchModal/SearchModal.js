import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CloudcastHomeContainer from 'components/CloudcastHomeContainer'

import './SearchModal.css'

class SearchModal extends Component {
  render() {
    const { searchText, searchResultsInTags, searchResultsInName } = this.props
    const showResultClass = searchText.length ? 'sm--visible' : ''
    return (
      <div className={'sm ' + showResultClass}>
        <section className='sm__inner'>
          <h2>results for {searchText}...</h2>
          <section className='sm__results'>
            <div className='sm__results__in'>
              <h3 className='title-margin'>... in name</h3>
              <div>
                {searchResultsInName.map((result) => {
                  return <CloudcastHomeContainer cloudcast={result} key={result.key} forceMobileView />
                })}
                {!searchResultsInName.length && <div>no results</div>}
              </div>
            </div>
            <hr className='sm__results__delimiter' />
            <div className='sm__results__in'>
              <h3 className='title-margin'>... in tags</h3>
              <div>
                {searchResultsInTags.map((result) => {
                  return <CloudcastHomeContainer cloudcast={result} key={result.key} forceMobileView />
                })}
                {!searchResultsInTags.length && <div>no results</div>}
              </div>
            </div>
          </section>
        </section>
      </div>
    )
  }
}

SearchModal.propTypes = {
  searchText: PropTypes.string,
  searchResultsInName: PropTypes.array,
  searchResultsInTags: PropTypes.array
}

export default SearchModal
