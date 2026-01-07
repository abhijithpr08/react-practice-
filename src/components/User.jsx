import React from 'react'

function User({isLoggin}) {
    return <h1>{isLoggin ? "logged in" : "guest"}</h1>  
}

export default User