import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedBox() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <p>Tema sekarang: {theme}</p>
      <button onClick={toggle}>Ganti Tema</button>
    </div>
  );
}

export default function ThemeSwitcher() {
  return (
    <ThemeProvider>
      <ThemedBox />
    </ThemeProvider>
  );
}
