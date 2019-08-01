import React from 'react'
import RedButtonClass from './components/RedButtonClass'
import RedButtonFunc from './components/RedButtonFunc'
import {add, PI} from './utils'
import './App.css'

console.log(add(1,2))
console.log(PI)

function App() {
  return (
    <div>
      <RedButtonClass title="RED BUTTON CLASS COMPONENT" />
      <RedButtonFunc title="RED BUTTON FUNC COMPONENT" />
    </div>
  )
}





export default App
