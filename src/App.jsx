import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MouseTracker from './components/MouseTracker';
import PostFetcher from './components/PostFetcher';
import ControlledSignup from './components/ControlledSignup';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mouse-tracker" element={<MouseTracker />} />
            <Route path="/post-fetcher" element={<PostFetcher />} />
            <Route path="/controlled-signup" element={<ControlledSignup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
