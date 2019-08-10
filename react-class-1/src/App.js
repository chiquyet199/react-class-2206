import React from 'react'
import RedButtonClass from './components/RedButtonClass'
import RedButtonFunc from './components/RedButtonFunc'
import Counter from './components/Counter'
import RatingStar from './components/RatingStar/RatingStar'
import {add, PI} from './utils'
import './App.css'

console.log(add(1,2))
console.log(PI)

class App extends React.Component {
  state = {
    title: 'hello'
  }
  changeTitle =() => {
    this.setState({title: 'new title'})
  }
  onRedButtonClick = () => {
    alert('click from App')
  }

  sendResultToServer = (rate) => {
    alert('rated success ' + rate)
  }

  render(){
    // RatingStar.props.onRated = App.sendResultToServer
    // App.sendResultToServer nhan vao 1 parameter
    // RatingStar.props.onRated(1) ===> rate = 1
    return (
      <div>
        <RatingStar onRated={this.sendResultToServer}/> 
        <RatingStar onRated={this.sendResultToServer} initValue={1}/>
        <RatingStar onRated={this.sendResultToServer} initValue={2}/>
        <RatingStar onRated={this.sendResultToServer} initValue={5}/>
        <RatingStar onRated={this.sendResultToServer} initValue={2}/>
        
        {/* <RatingStar />
        <RatingStar initValue={1}/>
        <RatingStar initValue={5}/> */}
        
      </div>
    )
  }
  
}

// OOOOO className={`${this.state.star >0 ?'active' : ''}`} onClick = {setState({star:1})}
// OOOOO className={`${this.state.star >1 ?'active' : ''}`}onClick = {setState({star:2})}
// OOOOO className={`${this.state.star >2 ?'active' : ''}`}onClick = {setState({star:3})}
//.star.active{background: yeallow}

// state={
//   star: this.PaymentResponse.initValue || 0
// }

// setState({star:3})


export default App