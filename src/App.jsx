import React from 'react'
import HelloWorld from './components/HelloWorld'
import Greeting from './components/Greeting'
import FruitList from './components/FruitList'
import User from './components/User'

const App = () => {
  return (
    <div>
      <HelloWorld/>
      <Greeting name="Abhi"/>
      <FruitList/>
      <User isLoggin={false}/>
    </div>
  )
}

export default App
