
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import styles from "../assets/styles/interface.module.css";

function Clock() {
   const [clock, setClock] = useState("00:00:00")

   useEffect(() => {
      function updateClock() {
         const now = new Date();
         let hours = now.getHours();
         let minutes = now.getMinutes();
         let seconds = now.getSeconds();

         let meridiem = hours >= 12 ? 'PM' : 'AM';
         hours = hours % 12 || 12;

         const clockDisplay =
            `${hours.toString().padStart(2, '0')}:` +
            `${minutes.toString().padStart(2, '0')}:` +
            `${seconds.toString().padStart(2, '0')} ${meridiem}`;

         setClock(`${clockDisplay}`)
      }
      updateClock();
      const intervalId = setInterval(updateClock, 1000);

      return () => clearInterval(intervalId)
   }, [])

   return (
      <section className={styles.body}>
         <Navbar />
         <main className={styles.main}>
            <h1>🕗 Clock</h1>
            <div className={styles.display}>
               <h1>{clock}</h1>
            </div>
         </main>
      </section>
   );
}

export default Clock;