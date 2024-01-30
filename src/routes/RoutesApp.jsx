import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Login from "../screens/Login";

import useAuth from "../hooks/useAuth";

const RoutesApp = () => {
  const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Login />;
  };
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Private Item={Home} />} />
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
