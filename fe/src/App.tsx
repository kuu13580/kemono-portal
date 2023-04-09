import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Top from './pages/Top';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/profile" element={<><NavBar/>未実装プロフィール</>} />
          <Route path="/account" element={<><NavBar/>未実装アカウント</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
