import React from 'react'
import HelloWorld from './components/HelloWorld'
import Greeting from './components/Greeting'
import FruitList from './components/FruitList'

const App = () => {
  return (
    <div>
      <HelloWorld/>
      <Greeting name="Abhi"/>
      <FruitList/>
    </div>
  )
}

export default App
