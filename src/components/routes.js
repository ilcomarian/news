import React from "react";
import { Switch, Route } from "react-router-dom";
import Sorts from "./sport";
import Home from "./home";
import Business from "./business";
import Tech from "./tech";
import Entertainment from "./entertainment";
import Science from "./science";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/sports" component={Sorts} />
    <Route exact path="/business" component={Business} />
    <Route exact path="/entertainment" component={Entertainment} />
    <Route exact path="/science" component={Science} />
    <Route exact path="/tech" component={Tech} />
  </Switch>
);

export default Routes;
