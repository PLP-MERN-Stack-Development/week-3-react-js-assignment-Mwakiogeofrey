import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

const Layout = ({ children, onToggleTheme, theme }) => (
  <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 transition-colors">
    <NavBar onToggleTheme={onToggleTheme} theme={theme} />
    <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
    <Footer />
  </div>
);

export default Layout;
