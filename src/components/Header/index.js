import React from "react";
import { Nav } from "./styled";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link, Router } from "react-router-dom";
import history from "../../services/history";
import { useSelector } from "react-redux";

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Router history={history}>
      <Nav>
        <Link to="/">
          <FaHome size="24px" />
        </Link>
        <Link to="/login">
          <FaUserAlt size="24px" />
        </Link>
        <Link to="/adkadk">
          <FaSignInAlt size="24px" />
        </Link>
        {botaoClicado ? "clicado" : "Não clicado"}
      </Nav>
    </Router>
  );
}

/*
<Router history={history}>
      <Switch>
        <MyRoute exact path="/" component={Login} />
        <MyRoute path="*" component={Page404} />
      </Switch>
    </Router>
*/
