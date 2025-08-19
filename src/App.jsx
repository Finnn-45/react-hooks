import Counter from "./Counter";
import FetchUsers from "./FetchUsers";
import InputFocus from "./InputFocus";
import FactorialMemo from "./FactorialMemo";
import ItemListCallback from "./ItemListCallback";
import TodoReducer from "./TodoReducer";
import ThemeSwitcher from "./ThemeSwitcher";
import ScrollPosition from "./ScrollPosition";
import CustomInputExample from "./CustomInput";
import useLocalStorage from "./useLocalStorage";
import "./App.css";


export default function App() {
  const [name, setName] = useLocalStorage("username", "Anon");

  return (
    <div>
      <h1>🚀 React Latihan</h1>
      <Counter />
      <FetchUsers />
      <InputFocus />
      <FactorialMemo />
      <ItemListCallback />
      <TodoReducer />
      <ThemeSwitcher />
      <ScrollPosition />
      <CustomInputExample />
      <p>Nama dari localStorage: {name}</p>
      <button onClick={() => setName("UserBaru")}>Ganti Nama</button>
    </div>
  );
}
