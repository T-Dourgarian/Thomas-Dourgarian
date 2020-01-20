import React from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
