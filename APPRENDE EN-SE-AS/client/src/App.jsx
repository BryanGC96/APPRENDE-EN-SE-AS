import React from 'react'
import './App.css'
import ResponsiveAppBar from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './pages/About';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import Home from './pages/Home'



function App() {
  return (
    <Router>
      <div className='app-container'>
        <ResponsiveAppBar /> {/**Navbar */}
        <main className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path='/aboutUs' element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;

