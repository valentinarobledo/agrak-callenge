import '../App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Edit from '../pages/Edit';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit/>} />
          <Route exact path="/" element={ <Home/> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
