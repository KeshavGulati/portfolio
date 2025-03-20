import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Bigthink from "./pages/bigthink";
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router basename='/portfolio'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bigthink' element={<Bigthink />}/>
      </Routes>
    </Router>

  );
  

}

export default App
