import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/ui/layout";
import TaskManager from "./components/TaskManger";
import ApiDemo from "./pages/ApiDemo";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Layout onToggleTheme={toggleTheme} theme={theme}>
          <Routes>
            <Route path="/" element={<div className="text-center text-2xl font-bold">Welcome to TaskApp!</div>} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api-demo" element={<ApiDemo />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
   