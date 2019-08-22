import React from 'react'

class Counter extends React.Component{
  state = {
    count: 0
  }
  
  onButtonClick = () => {
    let currentStateCount = this.state.count
    this.setState({count: currentStateCount + 1})
  }

  render(){
    return(
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.onButtonClick}>Increase</button>
      </div>
    )
  }
}
export default Counter