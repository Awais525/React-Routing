import React from 'react';
import './App.css';
import Home from './Components/pages/Home.js';
import AddUser from './Components/users/AddUser.js';
import Navbar from './Components/Layouts/Navbar.js';
import EditUser from './Components/users/EditUser.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import ViewUser from './Components/users/ViewUser.js';

const App=()=>{
return(
<div>
  
<Router>
  <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/users/add" element={<AddUser/>}/>
    <Route path="/users/edit/:id" element={<EditUser/>}/>
    <Route path="/users/:id" element={<ViewUser/>}/>



    
</Routes>
</Router>

</div>

)
}
export default App;