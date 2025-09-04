import { useState } from "react";

// Nih komponen Counter, buat ngitung angka naik-turun
export default function Counter() {
  // Bikin state 'count' awalnya 0
  // 'setCount' dipake kalo mau ngubah nilai 'count'
  const [count, setCount] = useState(0);

  return (
    <section>
      {/* Nampilin angka counter di layar */}
      <h2>Counter: {count}</h2>

      {/* Tombol buat nambahin angka, tiap klik nambah +1 */}
      <button onClick={() => setCount(count + 1)}>+</button>

      {/* Tombol buat ngurangin angka, tiap klik ngurang -1 */}
      <button onClick={() => setCount(count - 1)}>-</button>
    </section>
  );
}
