import React, {useState, useEffect} from "react";
function MyComponent() {

   const [count, setCount] = useState(0);

   useEffect(() => {
      document.title = `count: ${count}`;
   }, [count]);

   function addCount() {
      setCount(c => (c + 1));
      window.tittle = count;
   }

   function substractCount() {
      setCount(c => (c - 1));
      window.tittle = count;
   }
   return (
      <>
         <p>
            Count: {count}
         </p>
         <button onClick={addCount}>Add</button>
         <button onClick={substractCount}>Substract</button>
      </>
   );
}

export default MyComponent;