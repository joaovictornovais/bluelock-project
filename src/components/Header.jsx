import React from "react";

import Button from "./Button";
import useAuth from "../hooks/useAuth";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const items = ["Times", "Partidas", "Jogadores"];

  const handleNavigate = (section) => {
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <header className="fixed w-full p-2 bg-zinc-100 shadow-md z-10">
      <nav className="flex items-center justify-center sm:justify-between max-w-6xl mx-auto">
        <div className="flex gap-4 items-center">
          <img
            src="https://static1.personality-database.com/profile_images/dbb648a1b4554cb68f54b7a5e9a2cf34.png"
            className="h-16 rounded-full border-2 border-blue-700 hidden sm:inline"
          />
          <p className="font-semibold text-blue-700 hidden sm:inline">
            Jinpachi Ego
          </p>
        </div>
        <ul className="flex gap-4 items-center font-semibold">
          {items.map((item) => (
            <li key={item} onClick={() => handleNavigate(item)}>
              <a className="hover:text-blue-700 transition-all cursor-pointer">
                {item}
              </a>
            </li>
          ))}
          <Button fn={() => signout()}>Sair</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
