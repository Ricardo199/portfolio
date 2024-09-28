/**
 * @file App.js
 * @description Main application component that sets up routing and renders the Navbar and Footer.
 * @module App
 */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Outlet from './components/Outlet';

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
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;