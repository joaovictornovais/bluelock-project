import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Teams from "../screens/Teams";
import Login from "../screens/Login";

import useAuth from "../hooks/useAuth";
import Matches from "../screens/Matches";
import Players from "../screens/Players";
import Team from "../screens/Team";

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
          <Route exact path="/" element={<Private Item={Teams} />} />
          <Route path="/times" element={<Private Item={Teams} />} />

          <Route exact path="/partidas" element={<Private Item={Matches} />} />
          <Route exact path="/jogadores" element={<Private Item={Players} />} />

          <Route exact path="/times/:team" element={<Private Item={Team} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
