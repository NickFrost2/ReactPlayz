import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
function Stopwatch() {

   const [isRunning, setIsRunning] = useState(false)
   const [elapsedTime, setElapsedTime] = useState(0)
   const intervalIdRef = useRef(null)
   const startTimeRef = useRef(0)

   useEffect(() => {
      if (isRunning) {
         intervalIdRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current)
         }, 10);
      }

      return () => {
         clearInterval(intervalIdRef.current)
         intervalIdRef.current = null;
      }
   }, [isRunning])

   function start() {
      setIsRunning(true);
      startTimeRef.current = Date.now() - elapsedTime;

   }
   function stop() {
      setIsRunning(false);

   }
   function reset() {
      setElapsedTime(0)
      setIsRunning(false)
   }

   function time() {
      let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
      let seconds = Math.floor((elapsedTime / 1000) % 60);
      let milliseconds = Math.floor((elapsedTime % 1000) / 10);

      const currentClock = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;

      return currentClock;
   }
   return (
      <>
         <Navbar />
         <h1>⏱️ Stopwatch</h1>
         <div className="counter-display">
            <h1>{time()}</h1>
         </div>
         <div className="controls">
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset </button>
         </div>
      </>
   );
}

export default Stopwatch;