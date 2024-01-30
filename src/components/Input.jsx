import React from "react";

const Input = ({ type, placeholder, fn }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-gray-200 px-4 py-2 rounded-md text-sm text-zinc-800"
      onChange={(e) => fn(e.target.value)}
    />
  );
};

export default Input;
