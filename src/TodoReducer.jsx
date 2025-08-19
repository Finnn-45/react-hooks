import { useReducer } from "react";

const initialTodos = [];
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t
      );
    case "REMOVE":
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
}

export default function TodoReducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <section>
      <h2>Todo List</h2>
      <button onClick={() => dispatch({ type: "ADD", text: "Todo baru" })}>
        Tambah
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              style={{ textDecoration: t.done ? "line-through" : "none" }}
              onClick={() => dispatch({ type: "TOGGLE", id: t.id })}
            >
              {t.text}
            </span>
            <button onClick={() => dispatch({ type: "REMOVE", id: t.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
