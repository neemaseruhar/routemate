import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export const Header = () => {
  return (
   <header>
    <Link to='/'><span>Routemate</span></Link>
    <nav>
      <NavLink to='/' end><span>Home  </span></NavLink>
      <NavLink to='/ProductList'>ProductList</NavLink>
      <NavLink to='/Contacts'>Contacts</NavLink>
    </nav>
   </header>
  )
}
