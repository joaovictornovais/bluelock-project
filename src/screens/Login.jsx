import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { FaUser, FaLock } from "react-icons/fa";
import Button from "../components/Button";

import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signin, signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
    }

    navigate("/home");
  };

  useEffect(() => {
    // Login do administrador "EGO"
    signup("ego@bluelock.com", "123456");
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-zinc-100">
      <form className="flex flex-col gap-4 items-center p-4">
        <img
          src="src/assets/logo-bluelock.png"
          alt="Logo BlueLock"
          className="max-w-[300px]"
        />
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2">
            <FaUser />
            <Input placeholder="E-mail" type="email" fn={setEmail} />
          </div>
          <div className="flex items-center gap-2">
            <FaLock />
            <Input placeholder="Password" type="password" fn={setPassword} />
          </div>
          <ErrorMessage>{error}</ErrorMessage>
          <Button color="primary" fn={() => handleSignin()} type="submit">
            Login
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Login;