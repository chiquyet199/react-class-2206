import React from 'react'
import './ToggleButton.css'

class ToggleButton extends React.Component{
  state = {
    isActive: this.props.active // Giá trị ban đầu của state.isActive sẽ được quyết định bởi this.props.active
  }

  handleClick = () => {
    const currentStateIsActive = this.state.isActive
    // this.setState({isActive: isActive ? false : true})
    /** this.setState chạy bất đồng bộ, có nghĩa là giá trị của state không được thay đổi ngay lập tức sau khi gọi hàm setState
     * muốn truy cập vào giá trị mới của state sau khi gọi hàm setState thì viết code trong function callback
     */
    // this.setState({isActive: currentStateIsActive === true ? false : true}, function(){
    this.setState({isActive: !currentStateIsActive}, function(){
      this.props.onChange(this.state.isActive)
    })
  }

  render(){
    const className = this.state.isActive ? "ToggleButton active" : "ToggleButton"
    return (
      <div onClick={this.handleClick} className={className}>
        <div className="inner"/>
      </div>
    )
  }
}

export default ToggleButton