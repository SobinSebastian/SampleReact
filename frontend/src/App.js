import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './Cars';
import CreateCars from './CreateCars';
import Update from './Update';
import Selectcar from './Selectcar';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';
import File from './File';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreateCars />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/selectcar" element={<Selectcar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/file" element={<File />} />

        </Routes>
      </Router>
  );
}

export default App;
