import React from 'react'

const scrollIntoView = (WrappedComponent) => (
  class extends React.Component {
    render() {
      window.scrollTo(0, 0)
      return <WrappedComponent {...this.props} />
    }
  }
)

export default scrollIntoView
