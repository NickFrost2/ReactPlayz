/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Counter from './Pages/Counter';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
  )
}

export default App
