import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Bigthink from "./pages/bigthink";
import Spokes from './pages/Spokes';
import ScrollToTop from './utils/ScrollToTop';

import { MobileNavbarProvider } from './utils/MobileNavbarContext';

function App() {
  return (
    <MobileNavbarProvider>
      <Router basename='/portfolio'>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bigthink' element={<Bigthink />} />
          <Route path='/spokes' element={<Spokes />} />
        </Routes>
      </Router>
    </MobileNavbarProvider>
  );
}

export default App;