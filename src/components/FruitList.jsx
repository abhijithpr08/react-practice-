import React from 'react'

const fruit = ["apple", "banana", "grape"]
const FruitList = () => {
  return (
    <ul>
        {fruit.map((fruit, index)=>(
            <li key={index}>{fruit}</li>
        ))}
    </ul>
  )
}

export default FruitList