/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Counter from './Pages/Counter';
import Stopwatch from './Pages/StopWatch';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/stopwatch' element={<Stopwatch />} />
    </Routes>
  )
}

export default App
