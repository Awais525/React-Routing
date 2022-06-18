import React from 'react';
import{ Link,NavLink } from 'react-router-dom';
const Navbar=()=>{
return(
  
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className='container'>
    <NavLink className="navbar-brand" exact to="/">.·★.·★ 🅰🆆🅰🅸🆂 ★·.★·.</NavLink>
    <button className="navbar-toggler" 
    type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarTogglerDemo02"
     aria-controls="navbarTogglerDemo02"
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <Link className="btn btn-outline-light " to="/users/add">Add User</Link>
  </div>
</nav>
  
)
}
export default Navbar;