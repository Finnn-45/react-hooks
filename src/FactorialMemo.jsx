import { useState, useMemo } from "react";

// Fungsi buat ngitung faktorial (rekursif)
// Misal: 5! = 5 x 4 x 3 x 2 x 1
function factorial(n) {
  if (n <= 0) return 1; // kalo 0 atau minus, balikin 1 aja
  return n * factorial(n - 1); // rekursif jalan terus sampe 1
}

export default function FactorialMemo() {
  // State buat nyimpen angka yang mau dihitung faktorial
  const [number, setNumber] = useState(1);
  // State tambahan buat teks, biar keliatan efek memo nya
  const [text, setText] = useState("");

  // Pake useMemo biar faktorial cuma dihitung ulang kalo 'number' berubah
  // Jadi kalo cuma ngetik di input text, ga bikin faktorial keitung ulang
  const fact = useMemo(() => factorial(number), [number]);

  return (
    <section>
      {/* Input angka buat nentuin faktorial */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      {/* Input teks biasa, ga ada hubungannya sama faktorial */}
      <input
        type="text"
        value={text}
        placeholder="Coba ketik"
        onChange={(e) => setText(e.target.value)}
      />

      {/* Nampilin hasil faktorial */}
      <p>Hasil Faktorial: {fact}</p>
    </section>
  );
}
