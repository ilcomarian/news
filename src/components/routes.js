import React from "react";
import { Switch, Route } from "react-router-dom";
import Sorts from "./sport";
import Home from "./home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/sports" component={Sorts} />
  </Switch>
);

export default Routes;
