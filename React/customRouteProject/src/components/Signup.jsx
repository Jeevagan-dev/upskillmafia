import React from 'react'

function Signup() {
  return (
    <div className="reg">
        <form action="">
        <h1>Signup</h1>
        <input type="text" placeholder='Enter Username'/>
        <input type="password" placeholder='Enter Password' />
        <input type="password" placeholder='confirm Password' />
        <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup