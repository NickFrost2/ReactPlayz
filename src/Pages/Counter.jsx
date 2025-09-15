import React, { useState } from "react";

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
      <div>
         <h1>🧮 Counter</h1>
         <div class="counter-display">
            <h1 id="count">{count}</h1>
         </div>
         <div class="controls">
            <button onClick={increment}>Increment &#8607;</button>
            <button onClick={decrement}>Decrement &#8609;</button>
            <button onClick={reset}>Reset &#8635;</button>
         </div>
      </div>
   );
}

export default Counter;