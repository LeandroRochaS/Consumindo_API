import React from "react";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { Router } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./Routes";
import history from "./services/history";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
