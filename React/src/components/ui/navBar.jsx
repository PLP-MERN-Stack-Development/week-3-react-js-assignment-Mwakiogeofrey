import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ onToggleTheme, theme }) => (
  <nav className="bg-white dark:bg-gray-900 shadow px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <span className="font-bold text-xl text-blue-600 dark:text-blue-400">TaskApp</span>
      <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 px-2">Home</Link>
      <Link to="/tasks" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 px-2">Tasks</Link>
      <Link to="/api-demo" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 px-2">API Demo</Link>
    </div>
    <button
      onClick={onToggleTheme}
      className="bg-gray-200 dark:bg-gray-700 rounded px-3 py-1 text-sm text-gray-800 dark:text-gray-100"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  </nav>
);

export default NavBar;
     