import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Services from './pages/Services';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
