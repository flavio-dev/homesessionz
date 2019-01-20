import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchIcon from './SearchIcon'

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

  render() {
    return (
      <div className={this.state.isFocused ? 'search search--focused' : 'search'}>
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
  searchText: PropTypes.string
}

export default Search
