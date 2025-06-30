import React from "react";

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 text-center py-4 mt-8 border-t dark:border-gray-700">
    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
      <span className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} TaskApp. All rights reserved.</span>
      <div className="flex gap-4">
        <a href="#" className="text-blue-500 hover:underline">About</a>
        <a href="#" className="text-blue-500 hover:underline">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
     