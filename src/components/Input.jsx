import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-gray-200 px-4 py-2 rounded-md text-sm text-zinc-800"
    />
  );
};

export default Input;
