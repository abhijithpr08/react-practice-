import React from 'react'

function AlertButton() {
    const handleClick =()=> alert("hey")
   return(
    <button onClick={handleClick}>Click</button>
   )
}

export default AlertButton