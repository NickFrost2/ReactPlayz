import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyComponent from './MyComponent.jsx';
import Clock from './Clock.jsx';
import Stopwatch from './StopWatch.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MyComponent />
    <Clock />
    <Stopwatch/>
  </StrictMode>
)
