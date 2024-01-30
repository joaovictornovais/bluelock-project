import React from "react";
import RoutesApp from "./routes/RoutesApp";

import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
};

export default App;
