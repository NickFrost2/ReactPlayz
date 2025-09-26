
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Counter from './Pages/Counter';
import Stopwatch from './Pages/StopWatch';
import Clock from './Pages/Clock';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/stopwatch' element={<Stopwatch />} />
      <Route path='/clock' element={<Clock />} />
    </Routes>
  )
}

export default App
