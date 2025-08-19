import { useState } from "react";
  export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </section>
  );
  }
