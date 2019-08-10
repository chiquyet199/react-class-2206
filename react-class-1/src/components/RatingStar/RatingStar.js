import React from 'react'
import './RatingStar.css'

// props <=> property
class RatingStar extends React.Component {
  state = {
    rate: this.props.initValue || 3,
  }
  // this.props.onRated = (rate) => {
  //   alert('rated success ' + rate)
  // }
  rate1 = () => {
    this.setState({rate: 1})
    this.props.onRated(1)
  }
  rate2 = () => {
    this.setState({rate: 2})
    this.props.onRated(2)
  }
  rate3 = () => {
    this.setState({rate: 3})
    this.props.onRated(3)
  }
  rate4 = () => {
    this.setState({rate: 4})
    this.props.onRated(4)
  }
  rate5 = () => {
    this.setState({rate: 5})
    this.props.onRated(5)
  }
  render() {
    // const rate = this.state.rate
    const {rate} = this.state
    return (
      <div className="RatingStar">
        <div onClick={this.rate1} className={rate > 0 ? 'star rated' : 'star'} />
        <div onClick={this.rate2} className={`star ${rate > 1 ? 'rated' : ''}`} />
        <div onClick={this.rate3} className={`star ${rate > 2 ? 'rated' : ''}`} />
        <div onClick={this.rate4} className={`star ${rate > 3 ? 'rated' : ''}`} />
        <div onClick={this.rate5} className={`star ${rate > 4 ? 'rated' : ''}`} />
      </div>
    )
  }
}

export default RatingStar
