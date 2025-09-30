import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundVideo />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
