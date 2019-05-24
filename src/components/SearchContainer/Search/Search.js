import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchIcon from './SearchIcon'
import CrossIcon from 'components/CrossIcon'

import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false
    }

    this.searchInput = React.createRef()
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isFocused && props.searchText.length) {
      return { isFocused: true }
    }
    return state
  }

  handleChange = (e) => {
    this.props.setSearchText(e.target.value)
  }

  focusOnInput = () => {
    if (!this.state.isFocused) {
      this.searchInput.current.focus()
      this.setState({ isFocused: true })
    }
  }

  blurOnInput = () => {
    if (this.state.isFocused && !this.props.searchText.length) {
      this.setState({ isFocused: false })
    }
  }

  clearInput = () => {
    this.props.clearSearchText()
    this.searchInput.current.focus()
  }

  render() {
    let classSearch = this.state.isFocused ? 'search search--focused' : 'search'
    classSearch = this.props.searchText.length ? classSearch + ' search--has-text' : classSearch
    return (
      <div className={classSearch}>
        <div
          className='search__clear-icon'
          onClick={this.clearInput}
        >
          <CrossIcon />
        </div>
        <div
          className='search__icon'
          onClick={this.focusOnInput}
        >
          <SearchIcon />
        </div>
        <input
          ref={this.searchInput}
          className='search__input'
          type='text'
          value={this.props.searchText} onChange={this.handleChange}
          onFocus={this.focusOnInput}
          onBlur={this.blurOnInput}
        />
      </div>
    )
  }
}

Search.propTypes = {
  setSearchText: PropTypes.func,
  clearSearchText: PropTypes.func,
  searchText: PropTypes.string
}

export default Search
