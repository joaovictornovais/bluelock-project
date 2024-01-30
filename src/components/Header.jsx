import React from "react";

import Button from "./Button";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { signout } = useAuth();

  const items = ["Home", "Matches", "Players"];

  return (
    <header className="fixed w-full p-2 bg-zinc-100 shadow-md">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex gap-4 items-center">
          <img
            src="/src/assets/profile-ego.jpg"
            className="h-16 rounded-full border-2 border-blue-700"
          />
          <p className="font-semibold text-blue-700 hidden sm:inline">
            Jinpachi Ego
          </p>
        </div>
        <ul className="flex gap-4 items-center font-semibold">
          {items.map((item) => (
            <li key={item}>
              <a className="hover:text-blue-700 transition-all cursor-pointer">
                {item}
              </a>
            </li>
          ))}
          <Button fn={() => signout()}>Logout</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
