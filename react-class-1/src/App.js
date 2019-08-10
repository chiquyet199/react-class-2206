import React from 'react'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import './App.css'

class App extends React.Component {
  state = {
    activePage: 'home',
  }

  navigate = page => {
    this.setState({activePage: page})
  }

  render() {
    const {activePage} = this.state
    let Content
    switch(activePage){
      case 'home':
        Content = Home
        break;
      case 'products':
        Content = Products
        break;
      case 'contact':
        Content = Contact
        break;
      default:
        Content = null
    }
    return (
      <div>
        <NavBar navigate={this.navigate} activePage={activePage}/>
        <Content/>
      </div>
    )
  }
}

export default App
