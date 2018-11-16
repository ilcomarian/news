import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";

import Category from "./science";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/sports" component={Category} />
    <Route exact path="/business" component={Category} />
    <Route exact path="/entertainment" component={Category} />
    <Route exact path="/science" component={Category} />
    <Route exact path="/technology" component={Category} />
  </Switch>
);

export default Routes;
