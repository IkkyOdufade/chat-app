import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../src/Components/Homepage";
import SignUp from "../src/Components/SignUp";
import Login from "../src/Components/Login";
import Dashboard from "./Components/Dashboard";


export default function Routes() {
  return (
    <Router >
      <Switch>
        <Route exact component={Homepage} path="/"></Route>
        <Route exact component={SignUp} path="/signup"></Route>
        <Route exact component={Login} path="/login"></Route>
        <Route exact component={Dashboard} path="/dashboard"></Route>

      </Switch>
    </Router>
  );
}
