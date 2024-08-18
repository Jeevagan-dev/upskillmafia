import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1>LOGO</h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
        <div className="btn">
            <Link to={'/login'}><button>Login</button></Link>
            <Link to={'/signup'}><button>signup</button></Link>
        </div>
    </header>
  )
}

export default Header