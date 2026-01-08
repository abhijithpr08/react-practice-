import React from 'react'
import HelloWorld from './components/HelloWorld'
import Greeting from './components/Greeting'
import FruitList from './components/FruitList'
import User from './components/User'
import AlertButton from './components/AlertButton'
import Clock from './components/Clock'
import Parent from './components/Parent'

const App = () => {
  return (
    <div>
      <HelloWorld/>
      <Greeting name="Abhi"/>
      <FruitList/>
      <User isLoggin={false}/>
      <AlertButton/>
      <Clock/>
      <Parent/>
    </div>
  )
}

export default App
