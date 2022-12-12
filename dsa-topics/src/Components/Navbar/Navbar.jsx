import React from 'react'
import {Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        
    <div className='nav'>
        <div>
          <Link className='link' to="/"><h1>  <i>SHREEBANK</i></h1></Link>  
        </div>
        <div className='subnav'>

            <Link to="/" className='link'><div>Home</div></Link>
            <Link to="/" className='link'><div>Topics</div></Link>
            <Link to="/" className='link'><div>Topics</div></Link>
            <Link to="/" className='link'><div>Login</div></Link>
            <Link to="/" className='link'><div>Logout</div></Link>
         
        </div>
    </div>
    </div>
  )
}

export default Navbar