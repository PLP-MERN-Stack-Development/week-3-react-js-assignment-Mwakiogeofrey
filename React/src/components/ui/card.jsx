import React from "react";

const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white dark:bg-gray-700 rounded-lg shadow p-4 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
     