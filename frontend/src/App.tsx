import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import AppRouter from "./router/AppRouter";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      <AppRouter theme={theme} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
}

export default App;