import React from 'react';
import{ Link,NavLink } from 'react-router-dom';
const Navbar=()=>{
return(
  
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className='container'>
    <NavLink className="navbar-brand" exact to="/">Awais Website</NavLink>
    <button className="navbar-toggler" 
    type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarTogglerDemo02"
     aria-controls="navbarTogglerDemo02"
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" exact to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
        
        </ul>

    </div>
  </div>
</nav>
  
)
}
export default Navbar;