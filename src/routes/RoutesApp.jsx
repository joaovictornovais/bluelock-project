import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Login from "../screens/Login";

import useAuth from "../hooks/useAuth";
import Matches from "../screens/Matches";
import Players from "../screens/Players";

const RoutesApp = () => {
  const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Login />;
  };
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Private Item={Home} />} />
          <Route path="/home" element={<Private Item={Home} />} />

          <Route exact path="/matches" element={<Private Item={Matches} />} />
          <Route exact path="/players" element={<Private Item={Players} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
