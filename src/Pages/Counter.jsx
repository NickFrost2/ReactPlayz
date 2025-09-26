import { useState } from "react";
import Navbar from "../Components/Navbar";
import styles from "../assets/styles/interface.module.css";
import { UpBtn, DownBtn, ResetBtn } from "../Components/ControlBtn";

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
         <Navbar />
         <main className={styles.main}>
            <h1>🧮 Counter</h1>
            <div className={styles.display}>
               <h1>{count}</h1>
            </div>
            <div className={styles.controls}>
               <UpBtn name="increment" onClick={increment} />
               <DownBtn name="decrement" onClick={decrement} />
               <ResetBtn name="reset" onClick={reset} />
            </div>
         </main>
      </section>
   );
}

export default Counter;