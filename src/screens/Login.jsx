import React from "react";
import Input from "../components/Input";
import { FaUser, FaLock } from "react-icons/fa";
import Button from "../components/Button";

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-zinc-100">
      <div className="flex flex-col gap-4 items-center p-4">
        <img
          src="src/assets/logo-bluelock.png"
          alt="Logo BlueLock"
          className="max-w-[300px]"
        />
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2">
            <FaUser />
            <Input placeholder="E-mail" type="email" />
          </div>
          <div className="flex items-center gap-2">
            <FaLock />
            <Input placeholder="Password" type="password" />
          </div>
          <Button color="primary">Login</Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
