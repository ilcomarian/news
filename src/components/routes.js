import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Sports from "./category/sport";
import Business from "./category/business";
import Entertainment from "./category/entertainment";
import Technology from "./category/tech";
import Category from "./science";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/sports" component={Sports} />
    <Route exact path="/business" component={Business} />
    <Route exact path="/entertainment" component={Entertainment} />
    <Route exact path="/science" component={Category} />
    <Route exact path="/technology" component={Technology} />
  </Switch>
);

export default Routes;
