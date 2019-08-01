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
      </div>
    )
  }
  
}




export default App
