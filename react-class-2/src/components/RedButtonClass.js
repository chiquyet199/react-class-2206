import React from 'react'

class RedButtonClass extends React.Component {
  onRedButtonClick = () => {
    alert('clicked' + this.props.title)
  }
  render() {
    return (
      <div className="red-button">
        <button onClick={this.props.xxx}>{this.props.title}</button>
      </div>
    )
  }
}

export default RedButtonClass