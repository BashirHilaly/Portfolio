import React from 'react';
import Introduction from './components/introduction';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Introduction />
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
