import React from 'react';
import './App.css';
import { Nav } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Top } from './pages';
import { Page } from './models/main'

const pages: Page[] = [
  { id: 1, path: '/', name: 'HOME', eng_name: null },
  { id: 1, path: '/about', name: 'ABOUT', eng_name: null },
];

function App() {
  return (
    <>
      <Router>
        <Nav pages={pages}/>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/about" element={<>未実装ABOUT</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
