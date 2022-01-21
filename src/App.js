import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Home from './pages/Home';
import Merge from './pages/Merge';
import Bubble from './pages/Bubble';
import Footer from './components/Footer';
import Quick from './pages/Quick';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) setIsOpen(false)
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/merge" element={<Merge/>} />
        <Route path="/bubble" element={<Bubble/>} />
        <Route path="/quick" element={<Quick/>} />
      </Routes>
      <Footer/>
    </>
  )
}
