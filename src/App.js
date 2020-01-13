import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import SplitGrid from './components/material/SplitGrid/index';


function App() {
  return (
    <div className="App">
        <Header />
        <SplitGrid />
        <Footer />
    </div>
  );
}

export default App;
