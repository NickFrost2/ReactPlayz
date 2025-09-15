import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import styles from "./counter.module.css"

function Counter() {

   const [count, setCount] = useState(0)

   function increment() {
      setCount(c => (c + 1))
   }

   function decrement() {
      setCount(c => (c - 1))
   }

   function reset() {
      setCount(0)
   }
   return (
      <section className={styles.body}>
         <Navbar/>
         <main className={styles.main}>
            <h1>🧮 Counter</h1>
            <div className={styles.counterDisplay}>
               <h1>{count}</h1>
            </div>
            <div className={styles.controls}>
               <button className={`${styles.button} ${styles.increment}`} onClick={increment}>Increment &#8607;</button>
               <button className={`${styles.button} ${styles.decrement}`} onClick={decrement}>Decrement &#8609;</button>
               <button className={`${styles.button} ${styles.reset}`} onClick={reset}>Reset &#8635;</button>
            </div>
         </main>
      </section>
   );
}

export default Counter;