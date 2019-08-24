import React from 'react'
import {connect} from 'react-redux'
import {navigate} from '../../redux/actions'

function NotFound(props) {
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <button
        onClick={() => {
          props.navigate('home')
        }}
      >
        BACK TO HOME
      </button>
    </div>
  )
}

const mapActionsToProps = dispatch => {
  return {
    navigate: page => {
      dispatch(navigate(page))
    },
  }
}

export default connect(
  null,
  mapActionsToProps
)(NotFound)
