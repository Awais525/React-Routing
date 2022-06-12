import React from 'react';
import './App.css';
import Home from './Components/pages/Home.js';
import Contact from './Components/pages/Contact.js';
import About from './Components/pages/About';
import Navbar from './Components/Layouts/Navbar.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
const App=()=>{
return(
<div>
  
<Router>
  <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
</Routes>
</Router>

</div>

)
}
export default App;