import React from "react";
import App from "./App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Area from "./components/area";
import ApiBoard from "./components/ApiBoard";
import Allapi from "./components/allapi";
import Deco from "./components/deco";
import { Route } from "react-router";

export default (
  <Route path="/" component={App}>
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path='/area:id' component={Area} />
    <Route path='/area' component={Area} />
    <Route path='/apiboard' component={ApiBoard} />
    <Route path='/deco' component={Deco} />
    <Route path='/allapi' component={Allapi} />
  </Route>
);
