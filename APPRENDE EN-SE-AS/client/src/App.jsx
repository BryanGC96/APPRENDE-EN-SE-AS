import React from 'react'
import './App.css'
import ResponsiveAppBar from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/About';


function App() {
  return (
    <Router>
      <div className='app-container'>
        <ResponsiveAppBar /> {/**Navbar */}
        <main className='content'>
          <Routes>
            {/* <Route path='/' element={</>} /> */}
            <Route path='/aboutUs' element={<AboutUs />} />
            {/* <Route path='/' element={</>} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;

