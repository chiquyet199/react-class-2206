import React from 'react'

const RedButtonFunc = props => {
  const onRedButtonClick = () => {
    alert('clicked' + props.title)
  }
  return (
    <div className="red-button">
      <button onClick={onRedButtonClick}>{props.title}</button>
    </div>
  )
}

export default RedButtonFunc
