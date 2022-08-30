import React from 'react';
import { Link} from 'react-router-dom'
const Navbar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React
        </Link>
        <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link aria-current="page" to="/" className='text-white'>
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/about" className='text-white'>
                About
              </Link>
            </li>
            <li>
              <Link  to="/contact" className='text-white'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Link  to="/users/add" className="btn btn-outline-light">Add User</Link>
      </div>
  </nav>
  )
};

export default Navbar;
