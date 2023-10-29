import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import links from './navItems.json'
const Header = () => {

  return (
    <>
    <div className='header-wrapper'>
      <h1 className='header-heading'>Top Stories</h1>
      <nav className='navbar'>
        <ul className='nav-lists'>
          {
            links.map(({title, path}, i) => (
              <li key={i}>
              <Link to={path} className='nav-links'>{title}</Link>
            </li>
            ))
          }  
        </ul>
      </nav>
    </div>
    <div className='border'></div>
    </>
    
  )
}

export default Header