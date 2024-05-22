import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './Cars';
import CreateCars from './CreateCars';
import Update from './Update';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Cars />} />
      <Route path="/create" element={<CreateCars/>}/>
      <Route path="/update/:id" element={<Update/>}/>
    </Routes>
  </Router>
  
  );
}

export default App;
