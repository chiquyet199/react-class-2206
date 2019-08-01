import React from 'react'
import RedButtonClass from './components/RedButtonClass'
import RedButtonFunc from './components/RedButtonFunc'
import Counter from './components/Counter'
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
  render(){
    return (
      <div>
        <button onClick={this.changeTitle}>Change title</button>
        <RedButtonClass xxx={this.onRedButtonClick} title={this.state.title} />
        <RedButtonFunc title={this.state.title} />
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>

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
