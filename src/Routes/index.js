import React from "react";
import { Router, Switch } from "react-router-dom";
import history from "../services/history";

import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import Page404 from "../pages/Page404/index";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <MyRoute exact path="/" component={Login} />
        <MyRoute path="*" component={Page404} />
      </Switch>
    </Router>
  );
}
