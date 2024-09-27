/**
 * @file App.js
 * @description Main application component that sets up routing and renders the Navbar and Footer.
 * @module App
 */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Services from './pages/Services';

/**
 * Main application component.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
/**
 * App component that sets up the main structure of the application.
 * It includes the Navbar, Footer, and routes for different pages.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;