import { connect } from 'react-redux'
import { setSearchText } from 'app/actions'

import Tag from './Tag'

const mapActionCreators = (dispatch) => ({
  setSearchText: (text) => dispatch(setSearchText(text))
})

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapActionCreators)(Tag)
