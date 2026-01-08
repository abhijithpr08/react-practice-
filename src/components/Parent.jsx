import React from 'react'

function Parent() {
    const name = "Abhijith"
  return (
    <Child name={name}/>
  )
}

function Child({name}){
    return <p>hello {name}</p>
}

export default Parent