import React from 'react';
import './App.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './MainPages/Overview/Overview';
import Footer from './MainPages/Footer/Footer';
import Navbar from './MainPages/Navbar/Navbar';
import Dashboard from './MainPages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="components">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
