import React from 'react'
import './RatingStar.css'


/**
 *
 *
 * @class RatingStar
 * @extends {React.Component}
 * Component RatingStar sẽ render ra 1 div cha và 5 div con có class star
 * Nếu div con nào có thêm class "rated" thì thay đổi background cho div con đó
 * Class "rated" sẽ được quyết định thêm vào div đó hay không là do giá trị của state.rate
 * Khi click lên 1 div con nào đó, thì thay đổi state rate tương ứng với div con đó.
 */
class RatingStar extends React.Component {
  state = {
    rate:  this.props.initValue || 3
  }
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
        <div onClick={this.rate1} className={rate >= 1 ? 'star rated' : 'star'} />
        <div onClick={this.rate2} className={`star ${rate >= 2 ? 'rated' : ''}`} />
        <div onClick={this.rate3} className={`star ${rate >= 3 ? 'rated' : ''}`} />
        <div onClick={this.rate4} className={`star ${rate >= 4 ? 'rated' : ''}`} />
        <div onClick={this.rate5} className={`star ${rate >= 5 ? 'rated' : ''}`} />
      </div>
    )
  }
}

export default RatingStar

