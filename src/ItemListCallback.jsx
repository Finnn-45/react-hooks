import { useState, useCallback } from "react";

export default function ItemListCallback() {
  const [items, setItems] = useState([]);

  const addItem = useCallback(() => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  }, []);

  return (
    <section>
      <button onClick={addItem}>Tambah Item</button>
      <ul>
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </section>
  );
}
