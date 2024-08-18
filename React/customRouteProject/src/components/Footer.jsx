import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <p>&copy All rights reserverd</p>
        <Link to={'/signup'}><button>Register free</button></Link>
    
    </footer>
  )
}

export default Footer