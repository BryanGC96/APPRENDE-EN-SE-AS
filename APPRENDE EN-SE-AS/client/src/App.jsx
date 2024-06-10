import React from 'react'
import './App.css'
import ResponsiveAppBar from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className='app-container'>
        <ResponsiveAppBar /> {/**Navbar */}
        <main className='content'>
          {/* <Route path='/' element={</>} /> */}
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

