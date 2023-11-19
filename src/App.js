import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Demo from './components/Contact'
import Footer from './components/Footer'
import Card from './components/Card'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
