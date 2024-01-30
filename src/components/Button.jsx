import React from "react";

const Button = ({ children, color, fn, type }) => {
  return (
    <button
      type={type}
      onClick={() => fn()}
      className={
        color === "primary"
          ? "px-3 py-2 text-xs bg-blue-700 border-2 border-blue-700 text-zinc-100 rounded-md hover:bg-zinc-100 hover:text-blue-700 transition-colors"
          : "px-3 py-2 text-xs bg-zinc-100 border-2 border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-zinc-100 transition-colors"
      }
    >
      {children}
    </button>
  );
};

export default Button;
