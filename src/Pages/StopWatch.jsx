import { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import { UpBtn, DownBtn, ResetBtn } from "../Components/ControlBtn";
import styles from "../assets/styles/interface.module.css";

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
      <section className={styles.body}>
         <Navbar />
         <main className={styles.main}>
            <h1>⏱️ Stopwatch</h1>
            <div className={styles.displaySmall}>
               <h1>{time()}</h1>
            </div>
            <div className={styles.controls}>
               <UpBtn name="start" onClick={start} />
               <DownBtn name="stop" onClick={stop} />
               <ResetBtn name="reset" onClick={reset} />
            </div>
         </main>
      </section>
   );
}

export default Stopwatch;