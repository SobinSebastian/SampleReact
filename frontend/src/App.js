import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './Cars';
import CreateCars from './CreateCars';
import Update from './Update';
import Selectcar from './Selectcar';
import Signin from './Signin';
import Signup from './Signup';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Cars />} />
      <Route path="/create" element={<CreateCars/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signUP" element={<Signup/>}/>
      <Route path="/update/:id" element={<Update/>}/>
      <Route path="/selectcar" element={<Selectcar/>}/>
    </Routes>
  </Router>
  
  );
}

export default App;
