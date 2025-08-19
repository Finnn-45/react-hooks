import { useState, useMemo } from "react";

function factorial(n) {
  if (n <= 0) return 1;
  return n * factorial(n - 1);
}

export default function FactorialMemo() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const fact = useMemo(() => factorial(number), [number]);

  return (
    <section>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={text}
        placeholder="Coba ketik"
        onChange={(e) => setText(e.target.value)}
      />
      <p>Hasil Faktorial: {fact}</p>
    </section>
  );
}
